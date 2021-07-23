import Layout from "../components/layout"
import { useParams } from "react-router-dom"

const CoursePage = () =>{
    let { slug } = useParams()
    return (
        <Layout>
            <div>This is Course Page. {slug}</div>

        </Layout>
    )
}

export default CoursePage