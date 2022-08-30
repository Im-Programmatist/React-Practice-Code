import logo from './logo.svg';
import './App.css';
import Funcomp from './Componets/FunctionalComp';
import ClassComp from './Componets/ClassComp';
import CLick from './Componets/Click';
import MouseHover from './Componets/MouseHover';
import ParentComp from './Componets/ParentComp';

function App() {
  return (
    <div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<Funcomp />
			<ClassComp />
			<CLick/>
			<MouseHover />
			<ParentComp />
		</header>
    </div>
  );
}

export default App;
