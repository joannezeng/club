import './TeacherThing.css'

//props: name, years teaching, courses teaching, rating
export default function TeacherProfile(props) {
    return(
      <div class="TeacherProfile">
        <div class="item">
          <h2>{props.Name}</h2>
        </div>
        <div class="item">
          <h4>{props.YearsTeaching} years teaching</h4>
        </div>
        <div class="item">
          <h4>Courses teaching: {props.CoursesTeaching}</h4>
        </div>
        <div class="item">
          <h4>Overall student rating: {props.Rating}/10</h4>
        </div>
      </div>
    )
  }