import css from './App.module.css';
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <ContentHooks />
    </div>
  );
}

export default App;