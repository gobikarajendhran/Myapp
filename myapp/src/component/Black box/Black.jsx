import "./Black.css"
import Button from '../../component/Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faTicket,faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Black({ title,title1 ,para, paragraph,buttonText, btnType, num, mail, text,showIcons=false,showIcons1=true }) {
    return (
        <div className="all">
            <div className="name">
                <h1>{title}</h1>
                <h1>{title1}</h1>
                <p>{para}</p>
                <p>{paragraph }</p>
                {buttonText && (
                    <Button label={buttonText} btnType={btnType} >
                        {showIcons1 && (
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "small",marginLeft:"10px" }} />)}
                        </Button>)}
                <div style={{padding:"10px"}}>
                    {showIcons && <FontAwesomeIcon icon={faPhone} style={{ color: "white", fontSize: "20px",  }} />}
                    <span style={{padding:"20px"}}>{num }</span>
                </div>
                <div style={{ padding: "10px" }}>
                    {showIcons && <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", fontSize: "20px" }} />}
                    <span style={{ padding: "20px" }}>{mail}</span></div>
                <div style={{ padding: "10px" }}>
                    {showIcons && <FontAwesomeIcon icon={faTicket} style={{ color: "white", fontSize: "20px" }} />}
                    <span style={{ padding: "20px" }}>{text}</span></div>
                
            </div>
        </div>
    )
}
export default Black;  