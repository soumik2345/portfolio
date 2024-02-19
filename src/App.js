import './App.css';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home';

function App() {
  return (
    <>

    <div className="full_page">
      
    <SideNav className='nav'/>


      <div className='body'>

          <Home/>

      </div>

    </div>
  

    </>
  );
}

export default App;
