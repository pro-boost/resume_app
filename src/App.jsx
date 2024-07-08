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
    title: "Software Developer",
    startDate: "10/10/2014",
    endDate: "10/07/2018",
  });

  const [pracExp, setPracExp] = useState({
    companyName: "Facebook",
    positionTitle: "Software Developer",
    responsibilities: "Manager",
    startDate: "10/10/2020",
    endDate: "10/07/2024",
  });

  const [submittedData, setSubmittedData] = useState({
    personalInfo: personalInfo,
    educExp: educExp,
    pracExp: pracExp,
  });

  const handlePersonalInfo = (name, value) => {
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEducExp = (field, value) => {
    setEducExp((prevState) => ({ ...prevState, [field]: value }));
  };

  const handlePracExp = (field, value) => {
    setPracExp((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmittedPersonalInfo = () => {
    setSubmittedData((prevState) => ({ ...prevState, personalInfo }));
  };
  const handleSubmittedEducExp = () => {
    setSubmittedData((prevState) => ({ ...prevState, educExp }));
  };
  const handleSubmittedPracExp = () => {
    setSubmittedData((prevState) => ({ ...prevState, pracExp }));
  };
  return (
    <div className="cv_body">
      <div className="cv_app">
        <div className="userInput">
          <PersoInfo
            handlePersonalInfo={handlePersonalInfo}
            handleSubmit={handleSubmittedPersonalInfo}
          />
          <EducExp
            handleEducExp={handleEducExp}
            handleSubmit={handleSubmittedEducExp}
          />
          <PracExp
            handlePracExp={handlePracExp}
            handleSubmit={handleSubmittedPracExp}
          />
        </div>
        <div className="display">
          <DisplayField
            personalInfo={submittedData.personalInfo}
            educExp={submittedData.educExp}
            pracExp={submittedData.pracExp}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
