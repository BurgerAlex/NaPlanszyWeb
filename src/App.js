import './App.css';
import MainPage from "./mainPage/MainPage";
import BrowsePage from "./browsePage/BrowsePage";
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainPage/>} />
            <Route exact path='/browse' element={<BrowsePage/>} />
        </Routes>
    </BrowserRouter>;
}

export default App;
