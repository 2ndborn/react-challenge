import css from './App.module.css';
import Content from './components/Content';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;