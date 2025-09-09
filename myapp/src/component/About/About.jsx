import './About.css';
import React from "react";
import AboutImage from "./About.image.jpg";
import writingImage from "./writing-a-book.jpg";
import Teamimage from './teampage3.webp';
function About() {
    return (
        <>
            <div style={{ padding: " 0px 50px 0px 50px" }}>
                <div style={{ textAlign: "center" }}>
                <img className='topimage' src={AboutImage} alt="About" />
                
                    <h2>"We belive in creating meaningful contend that inspires,educates,and connects people across the world!!.."</h2>

                </div>
                <div>
                    <h1>Our Story..!</h1>
                    <p style={{ color: "black" }}>
                        <img style={{ float: "right", marginRight: "10px" }} src={writingImage} />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis consectetur animi nobis numquam cupiditate deleniti. Distinctio enim ad iure laudantium eum reprehenderit molestiae, unde rerum eius esse architecto ipsam porro facilis cupiditate a tempora alias sint soluta! Temporibus perferendis libero incidunt doloribus veniam at consequuntur vitae sit nemo ab maiores minima fuga ipsam eius distinctio, enim voluptate quia soluta facilis facere, esse reiciendis aperiam laboriosam. Architecto, debitis! Provident officiis id repudiandae dicta. Debitis ipsum laudantium deserunt quam voluptatum reiciendis at facilis unde dolorem nihil dicta, sequi distinctio reprehenderit consequatur commodi delectus! Tenetur aperiam libero, molestias harum, suscipit adipisci soluta saepe minima blanditiis, ducimus officia voluptatibus asperiores alias magnam mollitia ab. Perspiciatis nemo rerum a autem, pariatur voluptatum atque quas dolorem repudiandae nesciunt alias, illo ratione earum, labore recusandae voluptatibus accusamus dolor qui tempore quaerat? Perferendis labore quis fugiat nulla tempora, doloremque, minima, culpa reprehenderit sunt rem dignissimos. Odit sequi sed, porro earum eum obcaecati ut natus maiores aliquam ipsum a? Beatae nobis optio est delectus. Architecto ea velit quo. Earum ab corporis, pariatur facere quaerat placeat obcaecati mollitia, magni excepturi quidem in voluptatum corrupti amet. Ipsa dolorem repudiandae officiis aut explicabo rerum velit dolorum dignissimos quibusdam voluptate maiores quaerat ullam, iusto dolore. Quidem, numquam? Sit tempora explicabo vitae architecto porro optio aperiam perferendis accusamus commodi placeat deleniti voluptatum ut nisi, atque ea suscipit facere odio pariatur consequuntur? Mollitia officiis perspiciatis consequuntur quos quod consectetur aut aliquid quidem sequi natus, doloremque excepturi expedita dolorum animi ratione aperiam tempore tempora, exercitationem obcaecati?</p>
                </div>
                
                    <h1>Our Mission & Our Vision...</h1>
                    <div className='border '>
                        <div className='border1'>
                            <h4 style={{fontSize:"bold" ,color:"black"}}>Our Mission </h4>
                        <p style={{ color: "black" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, quos? Dignissimos est dolor sapiente voluptatem in voluptates fugiat aperiam expedita.</p>
                    </div>
                    <div className='border2'>
                            <h4 style={{ fontSize: "bold", color: "black" }}>Our Vision </h4>
                        <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates, vel enim repellat quam tempore aliquid illum deserunt sequi laborum.</p>                    </div>
                    </div>
                  <h1>Meet Our Team..</h1>
                
                <img style={{width:"100%",height:"700px"}} src={Teamimage} />
                
            </div>
        </>
    )
}
export default About;