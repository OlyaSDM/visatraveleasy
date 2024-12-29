
import './App.css';
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Benefits from "./components/benefits-and-services/Benefits";
import Work from './components/work/work';
import Faq from "./components/faq/Faq";
import Reviews from "./components/reviews/Reviews";
import Contacts from "./components/contacts/Contacts";
import Services from './components/services/Services';
import Top from './components/top/Top';
import Call from './components/call/call';


function App() {

    return (
        <div className="App">
            <Welcome/>
            <About />
            <Services />
            <Benefits/>
            <Work/>
            <Faq />
            <Reviews />
            <Contacts />
            <Call/>
            <Top/>
        </div>
    );
}

export default App
