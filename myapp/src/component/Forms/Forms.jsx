import './Forms.css';
import { useState } from "react";

function Forms() {
    const [formdata, setformdata] = useState({});
    const [error, setError] = useState({});

   
    const field = [
        { type: "text", name: "name", label: "Name", required: true },
        { type: "range", name: "age", label: "Age", min: "0", max: "100" },
        { type: "text", name: "username", label: "UserName", required: true },
        { type: "text", name: "mothername", label: "MotherName" },
        { type: "text", name: "fathername", label: "fatherName" },
        { type: "text", name: "mobile", label: "MobileNumber", required: true},
        { type: "radio", name: "gnder", label: "Gender", required: true, option: ["Male", "Female"]},
        { type: "text", name: "doorno", label: "Door No" },
        { type: "text", name: "area", label: "Area" },
        { type: "text", name: "street", label: "Street" },
        { type: "text", name: "city", label: "City" },
        { type: "text", name: "country", label: "Country", required: true},
        { type: "text", name: "pincode", label: "PinCode" },
        { type: "checkbox", name: "occupation", label: "Occupation", required: true, option: ["Working", "Student"]},
        { type: "checkbox", name: "education", label: "Education", option: ["College", "School"] },
        {type: "text", name: "collegename", label: "College/SchoolName"},
        {type: "select", name: "interest", label: "Area of Interset", required: true, option: ["HTML", "CSS", "React", "Javascript", "Python"]},
        
        {type: "file", name: "resume", label: "Resume", required: true},
    ];
    const rules = {
        name: value => !value ? "Name Required" : "",
        username: value => !value ? "username required" : !/^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(value) ? "Username must be 8+ chars with number & special char" : "",
        mobile: value => !value ? "Mobile Required" : !/^\d{10}$/.test(value) ? "Mobile must be 10 digits" : "",
        gender: value => !value ? "Select Gender" : "",
        country: value => !value ? "Country" : "",
        occupation: value => !value ? "occupation" : "",
        resume: value => !value ? "Upload resume" : !(value && value.name && (value.name.endsWith(".pdf") || value.name.endsWith('.docx'))) ? 'only pdf or docx allowed' : "" };
    
    const validateField = (name, value) => rules[name] ? rules[name](value) : "";

        
 const handleChange = (eve) => {
        const { name, type, value, checked, files, selectedOptions } = eve.target;
        let newValue = value;

        if (type === "checkbox") {
            newValue = checked ? value : "";
        }
        if (type === "file") {
            newValue = files[0];
        }
        if (eve.target.multiple) {
            newValue = Array.from(selectedOptions, option => option.value);
        }

        setformdata((prev) => ({ ...prev, [name]: newValue }));

        const fieldError = validateField(name, newValue);
        setError((prev) => ({ ...prev, [name]: fieldError }));

        console.log("Current Value", name, newValue);
    };

   
    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log("Full form Data:", formdata);
    };

 return (
        <form onSubmit={handleSubmit}>
            {field.map((field) => (
                <div className='form'>
                    <p>{field.label} {field.required && <span style={{ color: "red" }}> *</span>}</p>

                    
                    {field.type === "select" ? (
                        <select name={field.name} onChange={handleChange} value={formdata[field.name] || ""}>
                            <option value="">select</option>
                            {field.option.map((option) => (
                                <option value={option}>{option }</option>
                            ))}
                        </select>
                    ) : field.option
                        ? field.option.map((option) => (
                            <label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={option}
                                    onChange={handleChange} />
                                {option}
                            </label>
                        ))
                        : (
                            <input
                                {...field}
                                value={field.type === "range" ? formdata[field.name] || 0 : formdata[field.name] || ""}
                                onChange={handleChange}
                            />
                        )}
                    {field.type === "range" && <span> {formdata[field.name] || 0}</span>}
                    {error[field.name] && <p style={{ color: "red" }}>{error[field.name]}</p>}

                </div>
            ))}
            <button type="submit">Submit</button> 
        </form>
    );
}

export default Forms;



































































    