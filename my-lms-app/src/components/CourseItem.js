import { useState } from "react";

function CourseItem (props) {
    const [display, setDisplay] = useState(false);

    return props.courses.map(function(course) {
        function showDisplay() {
            setDisplay(true);
            const courseDesc = document.getElementById(descId);
            courseDesc.style.display = 'block';
        }

        function hideDisplay() {
            setDisplay(false);
            const courseDesc = document.getElementById(descId);
            courseDesc.style.display = 'none';
        }

        var courseId = 'course' + course.id;
        var descId = 'desc' + course.id;

        return (
            <div className='courseCard' id={courseId} onMouseOver={showDisplay} onMouseLeave={hideDisplay}>
                <img src={course.image} alt={course.name}/>
                <div>{course.name}</div>
                <div>Instructor: {course.instructor}
                </div>
                <div id={descId} style={{display: 'none'}}>{course.description}</div>
                <button>Enroll Now</button>
                <br/><br/>
            </div>
        );
    });
}

export default CourseItem;