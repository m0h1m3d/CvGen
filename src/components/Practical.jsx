import { useState } from "react";

function Practical({
  practical,
  setSavedPractical,
  setPractical,
  savedPractical,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setPractical((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();
    setPractical(savedPractical);

    setTimeout(() => {
      setIsEditing(false);
    }, 100);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setSavedPractical(practical);
    setPractical({
      ...practical,
      company: "",
      position: "",
      res: "",
      location: "",
      startDate: "",
      endDate: ""
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }

  return (
    <form>
      <h3>💼 Experience</h3>

      <label htmlFor="company">
        Company:
        <input
          type="text"
          id="company"
          onChange={(e) => handleChange(e)}
          value={practical.company}
        />
      </label>

      <label htmlFor="position">
        Position:
        <input
          type="text"
          id="position"
          onChange={(e) => handleChange(e)}
          value={practical.position}
        />
      </label>

      <label htmlFor="location">
        Location:
        <input
          type="text"
          id="location"
          onChange={(e) => handleChange(e)}
          value={practical.location}
        />
      </label>

      <label htmlFor="responsibilities">
        Responsibilities:
        <input
          type="test"
          id="responsibilities"
          onChange={(e) => handleChange(e)}
          value={practical.res}
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

export default Practical;
