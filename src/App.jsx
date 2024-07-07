import { useState } from "react";
import "./App.css";
import DisplayField from "./components/DisplayField/DisplayField";
import PersoInfo from "./components/PersoInfo/PersoInfo";
import EducExp from "./components/EducExp/EducExp";
import PracExp from "./components/PracExp/PracExp";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Michael G Scott",
    age: "24",
    email: "Micheal@gmail.com",
    phone: "+133261458621",
  });
  const [educExp, setEducExp] = useState({
    schoolName: "Harvard",
    title: "Software Developper",
    startDate: "10/10/2014",
    endDate: "10/07/2018",
  });
  const [pracExp, setPracExp] = useState({
    companyName: "Facebook",
    PositionTitle: "Software Developper",
    Responsibilities: "Manager",
    startDate: "10/10/2020",
    endDate: "10/07/2024",
  });
  // const [submitted, setSubmitted] = useState({
  //   PersonalInfo: "",
  //   EducExp: "",
  //   PracExp: "",
  // });

  const handlePersonalInfo = (name, value) => {
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleEducExp = (field, value) => {
    setEducExp((prevState) => ({ ...prevState, [field]: value }));
  };
  const handlePracExp = (field, value) => {
    setPracExp((prevState) => ({ ...prevState, [field]: value }));
  };
  return (
    <div className="cv_body">
      <div className="cv_app">
        <div className="userInput">
          <PersoInfo handlePersonalInfo={handlePersonalInfo} />
          <EducExp handleEducExp={handleEducExp} />
          <PracExp handlePracExp={handlePracExp} />
        </div>
        <div className="display">
          <DisplayField
            personalInfo={personalInfo}
            educExp={educExp}
            pracExp={pracExp}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
