import './Home.css'
import Header from "../../component/Header/Header"
import Card from "../../component/Card/Card";
import IMG from "../../component/Card/blog-1.webp";
import IMG2 from "../../component/Card/blog-2.webp";
import IMG3 from "../../component/Card/blog-3.webp";
import Tittle from "../../component/Tittle/Tittle"
import Black from '../../component/Black box/Black';
import Grid from '@mui/material/Grid';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import  { useEffect, useState } from 'react';
import Image from "../../component/Image/Image";
function Home() {

  let data = [
    {
      tittle: "Hydrogen-Powered Vehicles", img: IMG, content: "This article delves into the cutting-edge technology behind hydrogen fuel cells and their environmental benefits.", btn: "Read more", btnType: "primary"
    },
    {
      tittle: "Mental Health in the Digital age", img: IMG2, content: "This article explores the intricate relationship between social media usage and mental health", btn: "Read more", btnType: "primary"
    },
    {
      tittle: "Mars Colonization and Beyond", img: IMG3, content: "This article takes readers on a journey through the latest developments in space exploration.", btn: "Read more", btnType: "primary"
    }
  ]
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // console.log(scrollTop, "scrollTop");
    setIsScrolled(scrollTop > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Image/>
      <div style={{ padding: "90px" }}>
        <Tittle
          head="Check my latest blog posts"

        />
        <Grid container spacing={3}>
          {data.map((item) => {
            return (
              <Grid size ={{lg:3 ,md:6, sm:3 ,xs:12}}>
                <Card label={item.tittle} IMG={item.img} content={item.content} btn={item.btn} btnType={item.btnType} />
              </Grid>
            )
          })
          }
          <Grid size xs={12}>
          <Black
            title="Discover all my "
            title1="articels"
             para="I am a versatile writer who explores"
            paragraph="a wide range of genres and topics."
            buttonText="Read More" btnType="secondary"
            showIcons={false}
            />
          </Grid>

          

        </Grid ></div>
     <div style={{paddingTop:"40px"}}>
      <Tittle
        
        className={"center"} head="Say Hi!!"
        description="Any questions or remarks? Just write us a messaage!" />
    </div >
      
      <div style={{ padding: "50px 90px" }}>
        <div className='box'>
          <Grid container spacing={2} >

            <Grid size={{ lg:6,sm:4 ,md:6,xs:12}}>
              <div className='form'>
                <div style={{ display: "flex", flexWrap: "wrap" }}>

                  <Input label={"First Name"} placeholder={"e.g,lucas"} />
                  <Input label={"Last Name"} placeholder={"e.g,Jones"} />
                </div >

                <Input label={"Email"} placeholder={"jones@gmail.com"} style={{ width: "100%" }} />
                <label>Your Message</label>
                  <textarea style={{ padding: "30px" }} className='textarea' /> <br />
                <div>
                  <div style={{ display: "flex", justifyContent: "center", padding: "120px" }}>
                    <Button className="sendbtn" label="SEND MESSAGE"  btnType="secondary" /></div></div>
              </div>
            </Grid>

            <Grid size={{ lg: 3 }}>
              <div className='secondbox'>
                <Black
                  title="Contact Information"
                  para="Fill up the form and our Team will get back to you within 24 hours."
                  num="+1(2345)56789"
                  mail="yhoooo@mail.com"
                  text="Open Support Ticket"
                  showIcons={true}
                  showIcons1={false} />
              </div>
            </Grid>


          </Grid >
        </div>
        <Footer />
      </div>
      

    </>


  )
}
export default Home;

