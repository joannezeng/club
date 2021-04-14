import './App.css';
import {useState} from 'react';
import TeacherProfile from 'e1t1/src/TeacherThing';
import './TeacherThing.css';
import './ship.js'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div class="wholepage">
      <div class="profiles">
        <div class="profile one">
          <TeacherProfile
            Name="Mary Jane"
            YearsTeaching="7"
            CoursesTeaching="Modern World History, AP Modern World History, AP Human Geography"
            Rating="8"></TeacherProfile>
        </div>
        <div class="profile two">
          <TeacherProfile
            Name="James Jones"
            YearsTeaching="10"
            CoursesTeaching="Geometry, Algebra 1, Algebra 2, Precalculus"
            Rating="7"></TeacherProfile>
        </div>
      </div>
      <br></br>
      <div class="ship">
        <h2>States</h2>
        <p>Click on the ship!</p>
        <div class="count">{count}</div>
        <img class="shipimg" src="https://github.com/joannezeng/E1T1MPassignment5/blob/main/shipClipart.png?raw=true" width="300" height="219.9"
        onClick={() => {
          setCount(count + 1);
        }}
        ></img>
      </div>
    </div>
  );
}

export default App
