import Part from "components/Part/Part";

function Course( {course}){
    console.log(course);
    
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(party=> <Part key={party.id} part={party}/>)}
            </ul>

        </div>
    )
}

export default Course