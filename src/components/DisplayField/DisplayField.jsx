import "./DisplayField.css";

function DisplayField({
  submittedName,
  submittedAge,
  submittedEmail,
  submittedPhone,
  submittedSchoolName,
  submittedTitle,
  submittedFromDate,
  submittedToDate,
}) {
  return (
    <div className="container">
      <h1>DisplayField</h1>
      <div className="display_personalInfo">
        <h2>Personal Information</h2>
        <p>FullName : {submittedName}</p>
        <p>Age : {submittedAge}</p>
        <p>Email : {submittedEmail}</p>
        <p>Phone Number : {submittedPhone}</p>
      </div>
      <div className="display_EducExp">
        <h2>Educational Experience</h2>
        <p>School Name : {submittedSchoolName}</p>
        <p>Title of Study : {submittedTitle}</p>
        <p>
          Date of Study : from : {submittedFromDate}
          to :{submittedToDate}
        </p>
      </div>
    </div>
  );
}

export default DisplayField;
