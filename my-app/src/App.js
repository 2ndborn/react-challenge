import css from "./components/css/Sidebar.module.css";
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm"
import Content from "./components/Content"

function App() {
  return (
    <div className={css.Sidebar}>
      {/* Add your components here */}
      <Sidebar />
      <NavBarSimple />
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;