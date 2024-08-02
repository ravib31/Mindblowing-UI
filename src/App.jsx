import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Collab from "./components/Collab";
// import Button from "./components/Button";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
const  App = ()=> {
  return (
    <>
      <div className="pt-[4.75] lg:pt[5.25rem] overflow-hidden">
       <Header/>
        <Home/>
        <Benefits/>
        <Collab/>
        <Services/>
      </div>
      <ButtonGradient/>
    </>
  );
}

export default App;
