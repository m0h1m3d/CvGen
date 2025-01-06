import "../styles/Resume.css";
function Resume({ savedPersonal, savedEducation, savedPractical }) {

  return (
    <div className="resume">
      <div className="personal">
        <h2>{savedPersonal.name}</h2>
        <div>
          <span>📧 {savedPersonal.email}</span>
          <span>📞 {savedPersonal.phone}</span>
          <span>🏠 {savedPersonal.address}</span>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="edInfo">
          <div className="dateLoc">
            <span>
              {savedEducation.startDate} - {savedEducation.endDate}
            </span>
            <span>{savedEducation.location}</span>
          </div>
          <div className="nameDeg">
            <span>{savedEducation.school}</span>
            <span>
              <strong>{savedEducation.degree}</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="exp">
        <h2>Experience</h2>
        <div className="expInfo">
          <div className="dateLoc">
            <span>
              {savedPractical.startDate} - {savedPractical.endDate}
            </span>
            <span>{savedPractical.location}</span>
          </div>
          <div className="namePosRes">
            <span>
              {savedPractical.company}
              <br />
              <strong>{savedPractical.position}</strong> 
            </span>
            <span>{savedPractical.res}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
