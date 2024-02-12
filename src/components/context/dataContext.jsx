import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getImgUrls = async () => {
    const cachedImages = localStorage.getItem("unsplashImages");
    if (cachedImages) {
      setImages(JSON.parse(cachedImages));
    } else {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              client_id: "bVKAlNHvlgtZ1MTQNaUbrDMzfGOa9fnLGiQhiYU3hcE",
              count: 10,
            },
          }
        );

        const imageUrls = response.data.map((img) => img.urls.regular);
        setImages(imageUrls);
        localStorage.setItem("unsplashImages", JSON.stringify(imageUrls));
      } catch (error) {
        console.error("Failed to fetch images from Unsplash:", error);
      }
    }
  };

  useEffect(() => {
    getImgUrls();
  }, []);

  return (
    <DataContext.Provider value={{ images }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
