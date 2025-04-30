import './App.css';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });

  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();

  const [selectedOptions, setSelectedOptions] = useState("");

  const [about, setAbout] = useState("");


  const handleReset = () => {
    setFirstName(""); 
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOptions("");
    setAbout("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Contact: ", contact);
    console.log("About: ", about);
    console.log("url: ", url);
  }

  const handleSubjectChange = (sub) => {
    setSubject((prevState) => ({
      ...prevState,
      [sub]: !prevState[sub],
    }));
  }

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method='get'> 
          <label>First Name*</label>
          <input 
            type="text"
            id='firstname'
            name='firstname'
            placeholder='Enter your first name'
            required 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <label>Last Name*</label>  
          <input 
            type="text"
            id='lastname'
            name='lastname' 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Enter your last name'
            required 
          />
          <label>Enter Email*</label>
          <input 
            type="email"
            id='email'
            name='email'
            placeholder='Enter your email'
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <label>Contact*</label>
          <input 
            type="tel"
            id='contact'
            name='contact'
            placeholder='Enter your contact number' 
            value={contact} 
            onChange={(e) => setContact(e.target.value)}
            required 
          /> 
          <label>Gender*</label>
          <input 
            type="radio" 
            name="gender" 
            id="male" 
            value="male"
            checked={gender === "male"} 
            onChange={(e) => setGender(e.target.value)} 
          /> Male
          <input 
            type="radio" 
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          /> Female
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          /> Other
          <label>Your best subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subject.english === true}
            onChange={(e) => handleSubjectChange("english")}
          /> English
          <input
            type="checkbox"
            name="lang"
            id='maths'
            checked={subject.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          /> Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subject.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          /> Physics
          <label>Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              setResume(e.target.files[0]);
            }}
            placeholder='Enter Upload File'
            required
          />
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Enter your URL'
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOptions}
            onChange={(e) => {
              setSelectedOptions(e.target.value);
            }}
          >
            <option 
              value=""
              disabled
              selected={selectedOptions === ""}
            >
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">Mongo</option>
            </optgroup>
          </select>
          <label>About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
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
