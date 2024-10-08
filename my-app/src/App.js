import css from "./components/css/Sidebar.module.css";
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm"
import Content from "./components/Content"
import SearchBar from "./components/SearchBar"
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className="App"> 
      {/* Add your components here */}
      <ContentHooks />
    </div>
  );
}

export default App;