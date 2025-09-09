import "./Button.css"

function Button({label,btnType,children}) {
   return (
   <button className={btnType === "primary" ? "primary" : "secondary"}>
         {label}
         {children}
         
   </button>

   );
}
export default Button;

