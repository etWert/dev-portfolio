import "./App.css"
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Temp from "./components/temp/Temp";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Temp />
            <Skills />
            <Footer />
        </>
    );
}
export default App
