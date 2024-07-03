import { useState } from "react";
import "./App.css";
import DisplayField from "./components/DisplayField/DisplayField";
import PersoInfo from "./components/PersoInfo/PersoInfo";
import EducExp from "./components/EducExp/EducExp";
import PracExp from "./components/PracExp/PracExp";

function App() {
  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPhone, setSubmittedPhone] = useState("");
  const [submittedSchoolName, setSubmittedSchoolName] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");
  const [submittedFromDate, setSubmittedFromDate] = useState("");
  const [submittedToDate, setSubmittedToDate] = useState("");

  return (
    <div className="cv_app">
      <div className="userInput">
        <PersoInfo
          setSubmittedName={setSubmittedName}
          setSubmittedAge={setSubmittedAge}
          setSubmittedEmail={setSubmittedEmail}
          setSubmittedPhone={setSubmittedPhone}
        />
        <EducExp
          setSubmittedSchoolName={setSubmittedSchoolName}
          setSubmittedTitle={setSubmittedTitle}
          setSubmittedFromDate={setSubmittedFromDate}
          setSubmittedToDate={setSubmittedToDate}
        />
        <PracExp />
      </div>
      <div className="display">
        <DisplayField
          submittedName={submittedName}
          submittedAge={submittedAge}
          submittedEmail={submittedEmail}
          submittedPhone={submittedPhone}
          submittedSchoolName={submittedSchoolName}
          submittedTitle={submittedTitle}
          submittedFromDate={submittedFromDate}
          submittedToDate={submittedToDate}
        />
      </div>
    </div>
  );
}

export default App;
