import "./Input.css"


function Input ({label,placeholder}){
    return (
            <div className="form1">
            <label>{label}</label>
            <input className="text" type="text"  placeholder={placeholder}  />
        </div>
        
    
    
    );
}
export default Input;