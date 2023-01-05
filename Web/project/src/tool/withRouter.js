import { useLocation,useParams,useNavigate } from "react-router-dom"
function withRouter (Child) {
    return (props)=>{
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()

        return <Child  {...props} location={location} navigate={navigate} params={params}> </Child>
    }
}

export default withRouter ;