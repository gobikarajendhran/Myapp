import './Forms.css'
import { useState } from 'react';

function Forms() {
    const [formData, setformData] = useState({});
    const [errors, seterrors] = useState({});
    const validateField = (name, value) => {
        let error = "";
        if (name === "name" && !value) {
            error = "Name Required";
        }
        if (name === "username") {
            if (!value) error = "Username required";
            else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
                error = "Username must be 8+ chars with number & special char";

            }
        }
        if (name === "mobile") {
            if (!value) error = "mobile required";
            else if (!/^\d{10}$/.test(value)) error = "Mobile must be 10 digits";
        }
        if (name === "gender" && !value) {
            error = "Select gender";

        }

        if (name === "country" && !value) {
            error = "select country";
        }
        if (name === "occupation" && !value) {
            error = "select occupation";
        }
        if (name === "resume" && !value) {
            error = "upload Resume";
        }
        return error;
    };

    const handleChange = (eve) => {
        const { name, type, value, checked, files, selectedOptions } = eve.target;
        let newValue = value;
        if (type === "checkbox") {
            newValue = checked ? value : "";
        }
        if (type === "file") {
            newValue = files[0];
        } if (eve.target.multiple) {
            newValue = Array.from(selectedOptions, option => option.value);
        }
        setformData((prev) => ({ ...prev, [name]: newValue }));
        const fieldError = validateField(name, newValue);
        seterrors((prev) => ({ ...prev, [name]: fieldError }));
        console.log("Current Value", name, newValue);

    };

    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log("Full form Data:", formData);
    };

    return (
        <>
            <form className="forms" onSubmit={handleSubmit}>
                <div className='form2'>
                    <p>Name:<span style={{ color: "red" }}> *</span> </p>
                    <input type="text" name="name" onChange={handleChange} />
                    {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                    {/* {console.log("jsx")} */}
                    <p>Age: {formData.age || 0}</p>
                    <input type="range" name="age" min="0" max="100" onChange={handleChange} value={formData.age || 0} />

                    <p>UserName :<span style={{ color: "red" }}> *</span></p>
                    <input type="email" name="username" onChange={handleChange} />
                    {errors.username && (
                        <p style={{ color: "red" }}>{errors.username}</p>
                    )}

                    <p>FatherName :</p>
                    <input type="text" name='fathername' onChange={handleChange} />

                    <p>MotherName :</p>
                    <input type="text" name="mothername" onChange={handleChange} />
                    <p>Mobile Number :<span style={{ color: "red" }}> *</span></p>
                    <input type="text" name="mobile" maxLength="10" onChange={handleChange} />
                    {errors.mobile && (
                        <p style={{ color: "red" }}>{errors.mobile}</p>
                    )}
                    <p>Gender<span style={{ color: "red" }}> *</span></p>
                    <input type="radio" name="gender" value="Male" onChange={handleChange} />Male
                    <input type="radio" name="gender" value="female" onChange={handleChange} />Female
                    {errors.gender && (
                        <p style={{ color: "red" }}>{errors.gender}</p>
                    )}
                </div>
                <div className='form2'>
                    <p>Address :</p>
                    <p>Door No :</p>
                    <input type="text" name='doorno' onChange={handleChange} />
                    <p>Area :</p>
                    <input type="text" name='area' onChange={handleChange} />
                    <p>Street :</p>
                    <input type="text" name='street' onChange={handleChange} />
                    <p>City :</p>
                    <input type="text" name='city' onChange={handleChange} />
                    <p>Country :<span style={{ color: "red" }}> *</span></p>
                    <input type="text" name='country' onChange={handleChange} />
                    {errors.country && (
                        <p style={{ color: "red" }}>{errors.country}</p>
                    )}
                    <p>PinCode :</p>
                    <input type="text" name='pincode' onChange={handleChange} />
                </div>
                <div className='form2'>
                    <p>Occupation :<span style={{ color: "red" }}> *</span></p>
                    <input type="checkbox" name='occupation' value="Working" onChange={handleChange} />Working
                    <input type="checkbox" name='occupation' value="Student" onChange={handleChange} />Student
                    {errors.occupation && (
                        <p style={{ color: "red" }}>{errors.occupation}</p>
                    )}
                    <p>Education Details :</p>
                    <input type="checkbox" name='educationdetails' value="College" onChange={handleChange} />College
                    <input type="checkbox" name='educationdetails' value="School" onChange={handleChange} />School
                    <p>College/School Name :</p>
                    <input type="text" name="collegeSchoolname" onChange={handleChange} />
                    <p>Passed Out :</p>
                    <input type="text" name='passedOut' onChange={handleChange} /><br />

                    <label>Area of Interest</label>
                    <select name='interest' multiple onChange={handleChange}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">Css</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                    </select>

                    <p>Resume Upload :<span style={{ color: "red" }}> *</span></p>
                    <input type="file" name='resume' accept=".pdf,.docx" onChange={handleChange} />
                    {errors.resume && (
                        <p style={{ color: "red" }}>{errors.resume}</p>
                    )}<br />
                    <button type="submit">submit</button>
                </div>
            </form>




        </>
    );
};

export default Forms;