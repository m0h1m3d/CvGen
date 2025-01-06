import { useState } from "react";

function Personal({ personal, setPersonal, setSavedPersonal, savedPersonal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setPersonal((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();
    setPersonal(savedPersonal);

    setTimeout(() => {
      setIsEditing(false);
    }, 100);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setSavedPersonal(personal);
    setPersonal({ ...personal, name: "", email: "", phone: "", address: "" });

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }

  return (
    <form>
      <h3>👤 Personal Details</h3>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          onChange={(e) => handleChange(e)}
          value={personal.name}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          onChange={(e) => handleChange(e)}
          value={personal.email}
        />
      </label>

      <label htmlFor="phone">
        Phone:
        <input
          type="number"
          id="phone"
          onChange={(e) => handleChange(e)}
          value={personal.phone}
        />
      </label>

      <label htmlFor="address">
        Address:
        <input
          type="text"
          id="address"
          onChange={(e) => handleChange(e)}
          value={personal.address}
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

export default Personal;
