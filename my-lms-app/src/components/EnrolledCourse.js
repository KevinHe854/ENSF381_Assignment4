import { createContext } from "react";

export const CountContext = createContext(10);

function EnrolledCourse (props) {

    var count = props.courses.length;
    console.log(count);

    return props.courses.map(function(course) {
        
        function dropCourse() {
            var droppedCourse = document.getElementById(courseId);
            droppedCourse.style.display = 'none';
            count -= 1;
        }

        var courseId = 'enrolled' + course.id;

        return (
            <div className='courseCard' id={courseId}>
                <img src={course.image} alt={course.name}/>
                <div>{course.name}</div>
                <div>Instructor: {course.instructor}
                </div>
                <div>Credit Hours: 1</div>
                <button onClick={dropCourse}>Drop Course</button>
                <br/><br/>
            </div>
        );
    });
}

export default EnrolledCourse;