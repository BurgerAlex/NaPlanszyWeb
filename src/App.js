import './App.css';
import Header from './header/Header'
import MainPage from "./mainPage/MainPage";
import BrowseGames from "./mainPage/BrowseGames";
import DrawGame from "./mainPage/DrawGame";

function App() {
  return (
    <div className="App">
       <Header/>
       <div className='main__page'>
           <MainPage/>
           <section className='main__functions'>
               <BrowseGames/>
               <DrawGame/>
           </section>
       </div>
    </div>
  );
}

export default App;
