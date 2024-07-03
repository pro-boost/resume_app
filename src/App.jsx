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

  return (
    <div className="cv_app">
      <div className="userInput">
        <PersoInfo
          setSubmittedName={setSubmittedName}
          setSubmittedAge={setSubmittedAge}
          setSubmittedEmail={setSubmittedEmail}
          setSubmittedPhone={setSubmittedPhone}
        />
        <EducExp />
        <PracExp />
      </div>
      <div className="display">
        <DisplayField
          submittedName={submittedName}
          submittedAge={submittedAge}
          submittedEmail={submittedEmail}
          submittedPhone={submittedPhone}
        />
      </div>
    </div>
  );
}

export default App;
