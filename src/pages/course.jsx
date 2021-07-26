import { useParams } from "react-router-dom"

const CoursePage = () =>{
    let { slug } = useParams()
    return (
            <div>This is Course Page. {slug}</div>

    )
}

export default CoursePage