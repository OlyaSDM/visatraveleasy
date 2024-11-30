
import './App.css';
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Benefits from "./components/benefits-and-services/Benefits";
import Faq from "./components/faq/Faq";
import Reviews from "./components/reviews/Reviews";
import Contacts from "./components/contacts/Contacts";


function App() {

    return (
        <div className="App">
            <Welcome/>
            <About />
            <Benefits/>
            <Faq />
            <Reviews />
            <Contacts />
        </div>

    );
}

export default App
