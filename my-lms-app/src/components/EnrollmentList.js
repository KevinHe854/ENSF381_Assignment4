import { useEffect, useContext } from "react";
import EnrolledCourse, { CountContext } from "./EnrolledCourse";
import courses from "../data/courses";

function EnrollmentList () { 

    var { count } = useContext(CountContext);

    return (
        <div>
            <h1>Enrolled Courses</h1>
            <p>Total credit hours: {count}</p>
            <div className='catalog'>
                <EnrolledCourse courses={courses}/>
            </div>
            
        </div>
    );
}

export default EnrollmentList;