import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';
import { action, originals } from './url'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      {/* passing dynamic rendering elements as props */}
      <Post url={originals} title='Netflix Originals' />
      <Post url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
