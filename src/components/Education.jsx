import { useState } from "react";

function Education({
  education,
  setSavedEducation,
  setEducation,
  savedEducation,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setEducation((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();
    setEducation(savedEducation);

    setTimeout(() => {
      setIsEditing(false);
    }, 100);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setSavedEducation(education);
    setEducation({
      ...education,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }

  return (
    <form>
      <h3>🎓 Education</h3>

      <label htmlFor="school">
        School:
        <input
          type="text"
          id="school"
          onChange={(e) => handleChange(e)}
          value={education.school}
        />
      </label>

      <label htmlFor="degree">
        Degree:
        <input
          type="text"
          id="degree"
          onChange={(e) => handleChange(e)}
          value={education.degree}
        />
      </label>

      <label htmlFor="startDate">
        StartDate:
        <input type="date" id="startDate" onChange={(e) => handleChange(e)} />
      </label>

      <label htmlFor="endDate">
        EndDate:
        <input type="date" id="endDate" onChange={(e) => handleChange(e)} />
      </label>

      <label htmlFor="location">
        Location:
        <input
          type="text"
          id="location"
          onChange={(e) => handleChange(e)}
          value={education.location}
        />
      </label>

      <div>
        <button className="edit" onClick={handleEdit} disabled={isEditing}>
          {isEditing ? "Editing..." : "Edit"}
        </button>
        <button className="save" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}

export default Education;
