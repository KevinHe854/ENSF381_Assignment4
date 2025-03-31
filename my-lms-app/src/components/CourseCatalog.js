import "./courseCatalog.css";
import CourseItem from "./CourseItem";
import courses from "../data/courses";

function CourseCatalog () {
    return (
        <div>
            <h1>Course Catalog</h1>
            <div className='catalog'>
                <CourseItem courses={courses}/>
            </div>
        </div>
    );
}

export default CourseCatalog;