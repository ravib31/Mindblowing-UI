import ButtonGradient from "./assets/svg/ButtonGradient"
// import Button from "./components/Button";
import Header from "./components/Header";
import Home from "./components/Home";
const  App = ()=> {
  return (
    <>
      <div className="pt-[4.75] lg:pt[5.25rem] overflow-hidden">
       <Header/>
        <Home/>
      </div>
      <ButtonGradient/>
    </>
  );
}

export default App;
