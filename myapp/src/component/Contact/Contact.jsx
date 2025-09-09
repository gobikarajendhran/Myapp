import './Contact.css'
import VoiceImage from "../../component/Contact/Voice-process.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone ,faLocationDot,faClock} from '@fortawesome/free-solid-svg-icons';

function Contact() {

    return (
        <>
            <div className='headerarea'>
            <img id="img" style={{float:"right" }} src={VoiceImage} />
            <h1>CONTACT ME</h1>
            <p>If you'd like to collaborate,share feedback,or just say hi- drop a message!!</p>

            <div className='line1'>
                <p id="p1">Phone : </p>
                <p>1(567)23456</p>
            </div>
            <div className='line2'>
                <p id="p2">Location :</p>
                <p>Second Main Street,Thanjore.</p>
            </div>
            <div className='line3'>
                <p id="p3">Mail :</p>
                <p>yhooo@gmail.com</p>
                </div>
                <div className='footerarea'>
                    <div className='box1'>
                        <h2>
                        {<FontAwesomeIcon icon={faPhone} />}
                        CALL US</h2>
                        <p>1(234)5678,</p>
                        <p>1(345)8907</p>
                    </div>
                    <div className='box2'>
                        <h2>
                            {<FontAwesomeIcon icon={faLocationDot} />}
                            LOCATION
                        </h2>
                        <p>121 Rock Street ,</p>
                            <p>21 Avenue,Thanjore</p>
                    </div>
                    <div className='box3'>
                        <h2>
                            {<FontAwesomeIcon icon={faClock} />}
                            HOURS
                        </h2>
                        <p>Mon-Fri.....11am-8pm,</p>
                        <p>Sat,Sun.....6am-8pm</p>
                   
                    </div>
                </div>
            </div>

        </>
    )

}
export default Contact;