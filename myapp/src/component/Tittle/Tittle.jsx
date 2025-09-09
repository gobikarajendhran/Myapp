 import "./Tittle.css"


function tittle({head,description,className}) {
    return (
        <>
            
            <h1 className={className}>{head}</h1>
                <h4>{description}</h4>
           
        </>
    )
}
export default tittle;