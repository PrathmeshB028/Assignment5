import { useState } from "react";
import "./App.css";

function App() {
  // State variables for form fields
  const [username, setUsername] = useState("");
  const [technology, setTechnology] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Controlled React Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          {/* Favorite Technology */}
          <div className="form-group">
            <label htmlFor="technology">Favorite Technology</label>

            <input
              type="text"
              id="technology"
              placeholder="Enter your favorite technology"
              value={technology}
              onChange={(event) => setTechnology(event.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {/* Preview Section */}
        <div className="preview">
          <h2>Live Preview</h2>

          <p>
            <strong>Username:</strong>{" "}
            {username || "Not entered yet"}
          </p>

          <p>
            <strong>Favorite Technology:</strong>{" "}
            {technology || "Not entered yet"}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default App;