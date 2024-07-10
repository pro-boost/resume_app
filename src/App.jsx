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

  const [educExpList, setEducExpList] = useState([
    {
      schoolName: "Harvard",
      title: "Software Developer",
      startDate: "10/10/2014",
      endDate: "10/07/2018",
    },
  ]);

  const [pracExpList, setPracExpList] = useState([
    {
      companyName: "Facebook",
      positionTitle: "Software Developer",
      responsibilities: "Manager",
      startDate: "10/10/2020",
      endDate: "10/07/2024",
    },
  ]);

  const [submittedData, setSubmittedData] = useState({
    personalInfo: personalInfo,
    educExp: educExpList,
    pracExp: pracExpList,
  });

  const handleAddEducExp = () => {
    setEducExpList([
      ...educExpList,
      {
        schoolName: "",
        title: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleAddPracExp = () => {
    setPracExpList([
      ...pracExpList,
      {
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handlePersonalInfo = (name, value) => {
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEducExp = (index, field, value) => {
    const updatedEducExpList = [...educExpList];
    updatedEducExpList[index] = {
      ...updatedEducExpList[index],
      [field]: value,
    };
    setEducExpList(updatedEducExpList);
  };

  const handlePracExp = (index, field, value) => {
    const updatedPracExpList = [...pracExpList];
    updatedPracExpList[index] = {
      ...updatedPracExpList[index],
      [field]: value,
    };
    setPracExpList(updatedPracExpList);
  };

  const handleSubmittedPersonalInfo = () => {
    setSubmittedData((prevState) => ({ ...prevState, personalInfo }));
  };
  const handleSubmittedEducExp = () => {
    setSubmittedData((prevState) => ({ ...prevState, educExp: educExpList }));
  };
  const handleSubmittedPracExp = () => {
    setSubmittedData((prevState) => ({ ...prevState, pracExp: pracExpList }));
  };

  const clearPracExp = () => {
    setPracExpList(
      pracExpList.map(() => ({
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      }))
    );
  };

  const clearEducExp = () => {
    setEducExpList(
      educExpList.map(() => ({
        schoolName: "",
        title: "",
        startDate: "",
        endDate: "",
      }))
    );
  };

  return (
    <div className="cv_body">
      <div className="cv_app">
        <div className="userInput">
          <PersoInfo
            handlePersonalInfo={handlePersonalInfo}
            handleSubmit={handleSubmittedPersonalInfo}
          />
          {educExpList.map((educExp, index) => (
            <EducExp
              key={index}
              index={index}
              handleEducExp={handleEducExp}
              handleSubmit={handleSubmittedEducExp}
              handleClear={clearEducExp}
              educExp={educExp}
              handleAdd={handleAddEducExp}
            />
          ))}
          {pracExpList.map((pracExp, index) => (
            <PracExp
              key={index}
              index={index}
              handlePracExp={handlePracExp}
              handleSubmit={handleSubmittedPracExp}
              handleClear={clearPracExp}
              pracExp={pracExp}
              handleAdd={handleAddPracExp}
            />
          ))}
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
