import Sidebar from "../Sidebar";
import "./valorant.scss";
import valorant_esports from "../../assets/images/valorant_esports.png";
const Valorant = () => {
    return(
        <>
        <Sidebar />
        <div className="valo">
            <img src={valorant_esports} alt="valorant esports" />
            </div>
        </>
        )
};
export default Valorant