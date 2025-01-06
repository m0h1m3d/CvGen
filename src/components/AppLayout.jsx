import { useEffect, useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import Logo from "./Logo";
import Resume from "./Resume";

function App() {
  const [personal, setPersonal] = useState({
    name: "jon snow",
    email: "example@gmail.com",
    phone: "9999999",
    address: "winterfell, the north",
  });
  const [savedPersonal, setSavedPersonal] = useState({});

  const [education, setEducation] = useState({
    school: "example university",
    degree: "bachelor degree",
    startDate: "3/21/2022",
    endDate: "present",
    location: "the wall",
  });
  const [savedEducation, setSavedEducation] = useState({});

  const [practical, setPractical] = useState({
    company: "Insomnia inc",
    position: "king",
    res: "fumble baddies",
    location: "red keep, kingslanding",
    startDate: "11/2/2020",
    endDate: "22/2/2023",
  });
  const [savedPractical, setSavedPractical] = useState({});


  useEffect(() => {
    document.title = "Cv Gen";
  });

  return (
    <>
      <Logo />
      <div className="container">
        <Form
          setPersonal={setPersonal}
          setSavedPersonal={setSavedPersonal}
          personal={personal}
          savedPersonal={savedPersonal}

          education={education}
          setEducation={setEducation}
          setSavedEducation={setSavedEducation}
          savedEducation={savedEducation}

          practical={practical}
          setPractical={setPractical}
          setSavedPractical={setSavedPractical}
          savedPractical={savedPractical}
        />
        <Resume
          savedPersonal={savedPersonal}
          savedEducation={savedEducation}
          savedPractical={savedPractical}
        />
      </div>
    </>
  );
}

export default App;
