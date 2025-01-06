import Personal from "./Personal";
import Education from "./Education";
import Practical from "./Practical";
import "../styles/Form.css";

function Form({
  personal,
  setPersonal,
  setSavedPersonal,
  savedPersonal,

  education,
  setEducation,
  setSavedEducation,
  savedEducation,

  practical,
  setPractical,
  setSavedPractical,
  savedPractical
}) {
  return (
    <div className="formContainer">
      <Personal
        personal={personal}
        setPersonal={setPersonal}
        setSavedPersonal={setSavedPersonal}
        savedPersonal={savedPersonal}
      />
      <Education
        education={education}
        setEducation={setEducation}
        setSavedEducation={setSavedEducation}
        savedEducation={savedEducation}
      />
      <Practical
        practical={practical}
        setPractical={setPractical}
        setSavedPractical={setSavedPractical}
        savedPractical={savedPractical}
      />
    </div>
  );
}

export default Form;
