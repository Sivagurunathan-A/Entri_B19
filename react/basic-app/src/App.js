
import './App.css';
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Home from './home';
import About from './about';
import Services from './services';
import Contact from './contact';
import NoPage from './NoPage';
import Layout from './Layout';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>} activeClassName="active" />
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
