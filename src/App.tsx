import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [gender, setGender] = useState("");
  const [apt, setApt] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("ID Number:", idNumber);
    console.log("Gender:", gender);
    console.log("APT:", apt);
    console.log("Course:", course);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>STUDENT INFORMATION</h2>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          ID Number:
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <input type="radio" value="female" />
          </select>
        </label>

        <label>
          {" "}
          Gender
          <input type="radio" value="male" />
          <span>Male</span>
        </label>

        <label>
          <input type="radio" value="female" />
          <span>Female</span>
        </label>
        <br />
        <br />

        <label>
          APT:
          <input
            type="text"
            value={apt}
            onChange={(e) => setApt(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </label>

        <h6>Courses Done</h6>

        <label>
          <input type="checkbox" />
          APT
        </label>

        <label>
          <input type="checkbox" />
          IST
        </label>

        <label>
          <input type="checkbox" />
          IR
        </label>

        <label>
          <input type="checkbox" />
          BCOM
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
