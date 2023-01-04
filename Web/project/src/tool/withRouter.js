import { useLocation,useParams,useNavigate } from "react-router-dom"

function withRouter(OldCom) {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    return (props)=>{
        return <OldCom {...props} navigate={navigate} params={params} location={location}></OldCom>
    }
}

export default withRouter;