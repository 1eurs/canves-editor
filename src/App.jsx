import Editor from "./components/Editor/Editor";
import ScenesPanel from "./components/scenes/ScenesPanel";
import TopMenu from "./components/toolbox/TopMenu";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-[#FFF5EB]">
      <div className="flex-none ">
        <TopMenu />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="flex-none w-48 bg-[#FEEBC8] overflow-y-auto">
          <ScenesPanel />
        </div>
        <div className="flex-grow flex w-full h-full bg-white">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
