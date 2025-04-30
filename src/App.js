import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState("English");

  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState();

  const [selectedOptions, setSelectedOptions] = useState();

  const [about, setAbout] = useState("");


  const handleReset = (e) => {
    e.preventDefault();
    setFirstName(""); 
  }

  const handleSubmit = (e) => {}



  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form> 
          <lable>First Name</lable>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <lable>Last Name</lable>  
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <lable>Email</lable>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <lable>Contact</lable>
          <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} /> 
          <label>Gender*</label>
          <input 
            type="radio" 
            name="gender" 
            id="male" 
            value="male" 
            onChange={(e) => setGender(e.target.value)} 
          /> Male
          <input 
            type="radio" 
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          /> Female
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          /> Other
          <label>Subject</label>
          <input
            type="checkbox"
            name="subject"
            id="english"
            value="English"
            onChange={(e) => setSubject(e.target.value)}
          /> English
          <input
            type="checkbox"
            name="subject"
            id="maths"
            value="Maths"
            onChange={(e) => setSubject(e.target.value)}
          /> Maths
          <input
            type="checkbox"
            name="subject"
            id="Physics"
            value="Physics"
            onChange={(e) => setSubject(e.target.value)}
          /> Physics
          <label>Resume</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => {
              setResume(e.target.files[0]);
              setUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <label>URL</label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Selected Options</label>
          <select
            name="selectedOptions"
            id="selectedOptions"
            multiple
            value={selectedOptions}
            onChange={(e) => {
              const options = Array.from(e.target.selectedOptions, option => option.value);
              setSelectedOptions(options);
            }}
          >
            <option value="option1">Option 1</option>
            <optgroup label="Group 1">
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
            </optgroup>
          </select>
          <label>About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder='About yourself'
            required
          ></textarea>
          <button 
            type="reset"
            value="Reset"
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button 
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </fieldset>

    </div>
  );
}

export default App;
