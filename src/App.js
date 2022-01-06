import { useState, useCallback } from "react";
import "./App.css";
import Button from './component/Button';
import DemoOutput from "./component/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('APP RUNNING');

  const toggleParagraph = useCallback(() => {
    if(allowToggle){
      setShowParagraph((prevState) => (prevState = !prevState))
    }}, [allowToggle])
  const allowToggleHandler = () => {
    setAllowToggle((prevState) => prevState = !prevState)
  }
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>allow toggle</Button>
      <Button onClick={toggleParagraph}>toggle paragraph</Button>
       <DemoOutput show={showParagraph}/>
    </div>
  );
}

export default App;
