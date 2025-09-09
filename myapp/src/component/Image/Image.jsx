import './Image.css'
import Avatar1 from "../../component/Card/avatar1.jpg";
import Button from '../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Image() {
    return (
        <>
        <div className='image'>
                <div className='image1'>
                  <img style={{ width: "150px", height: "150px" }}
                    src={Avatar1} alt="Avatar" />
                </div>
              </div>
        
              <div style={{ display: "flex", flexDirection: "column", padding: "50px", }}>
                <div className='topic'>
                  <h1>Emma Roberts</h1>
                  <button id="btn">FOLLOW</button>
                </div>
                <div style={{paddingLeft:"100px"}}>
                  <div className='list'>
                    <p><span style={{ fontSize: "20px", fontWeight: "bold" }}>323</span> <span style={{ color: "grey" }}>posts</span></p>
                    <p><span style={{ fontSize: "20px", fontWeight: "bold" }}>3.5K</span> <span style={{ color: "grey" }}>Following</span></p>
                    <p><span style={{ fontSize: "20px", fontWeight: "bold" }}>260</span> <span style={{ color: "grey" }}>Followers</span></p>
                  </div>
                
                  <div className='description'>
                    <p >A wordsmith who believes in the power of language to shape our world, inspire change, and connect us </p>
                    <p >all. I bring a unique perspective to the writing, blending the knowledge and experiences into thought-</p>
                    <p >provoking narratives.</p>
              <Button btnType="primary"><span style={{fontSize:"15px" , fontWeight:"bold"}}>More About me</span>
                {<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px"}}/>}
              </Button>
        
                  </div>
                </div>
            </div>
        </>
    )
        
    
}
export default Image;