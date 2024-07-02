import "./App.css";
import DisplayField from "./components/DisplayField/DisplayField";
import PersoInfo from "./components/PersoInfo/PersoInfo";
import EducExp from "./components/EducExp/EducExp";
import PracExp from "./components/PracExp/PracExp";
function App() {
  return (
    <>
      <div className="cv_app">
        <div className="userInput">
          <PersoInfo />
          <EducExp />
          <PracExp />
        </div>
        <div className="display">
          <DisplayField />
        </div>
      </div>
    </>
  );
}

export default App;
