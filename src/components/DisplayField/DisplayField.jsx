import "./DisplayField.css";

function DisplayField({
  submittedName,
  submittedAge,
  submittedEmail,
  submittedPhone,
}) {
  return (
    <div className="container">
      <h1>DisplayField</h1>
      <p>FullName : {submittedName}</p>
      <p>Age : {submittedAge}</p>
      <p>Email : {submittedEmail}</p>
      <p>Phone Number : {submittedPhone}</p>
    </div>
  );
}

export default DisplayField;
