import './Header.css'
import Button from '../../component/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header({ label, isScrolled }) {
    const headerdata = ["Home", "About Us", "Contact Us", "Docs"]
    const navigate = useNavigate();
    
    return (
        <>
            <header style={{ backgroundColor: isScrolled ? "white" : "#212121", color: isScrolled ? "black" : "white" }} className="home">
                <div className="title">
                    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                        <h2>Material Tailwind</h2>
                    </Link>
                </div>
                <div className="menu">

                    <ul>

                        {headerdata.map(item => (
                            <li
                                key={item}
                                style={{ cursor: (item === "About Us" || item === "Contact Us" || item === "Home") ? "pointer" : "default" }}
                                onClick={item === "About Us"
                                    ? () => navigate('/about')
                                    : item === "Contact Us"
                                        ? () => navigate('/contact')
                                        : null}>
                                {item === "Home" ? (
                                    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>{item}</Link>
                                ) : (
                                        item
                                )}
                            </li>
                        ))}
                    </ul>
                     </div>
                <div className="btn">
                    <div className='btn1'>
                       <Link to="/Login" ><Button label="Log IN" btnType="secondary" /></Link></div>
                    <div className='btn2'>
                        <Button label="Blocks" btnType="primary" />
                    </div>
                </div>

            </header>
        </>

    )
}
export default Header; 