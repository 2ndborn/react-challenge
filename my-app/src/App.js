import css from "./components/css/Sidebar.module.css";
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";

function App() {
  return (
    <div className={css.Sidebar}>
      {/* Add your components here */}
      <Sidebar />
      <NavBarSimple />
    </div>
  );
}

export default App;