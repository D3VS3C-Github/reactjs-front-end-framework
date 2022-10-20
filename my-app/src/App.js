//import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import './App.scss';
// [Pages]
import Home from './pages/Home';
import Resources from './pages/Resources';
import ToDo from './pages/ToDo';

function App() {
  // Navigation
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/resources':
      component = <Resources />
      break
    case '/to-do':
      component = <ToDo />
      break
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
