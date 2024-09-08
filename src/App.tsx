import DashboardContainer from "./components/DashboardContainer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen overflow-scroll">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <DashboardContainer />
      </div>
    </div>
  );
};

export default App;
