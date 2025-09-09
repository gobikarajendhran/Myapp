
import "./Crd.css"
import Button from '../../component/Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function card({ label, IMG, content, btn, btnType}) {
    return (
        <div className="card">
            <img src={IMG} />
            <h2>{label}</h2>
            <p id="content">{content}</p>
            
            <Button label={btn} btnType={btnType} >
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "small",marginLeft:"10px" }} />
                </Button >
        </div>
    )
}
export default card;