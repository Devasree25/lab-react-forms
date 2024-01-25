import React, { useState } from "react";

const Forms =()=>{

    const [formData, setFormData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        phoneNumber : ""
    })

    const [formError, setFormError] = useState({})
    const [fSubmit, setFSubmit] = useState(false)

    const handleInput =(e)=>{
       let {name, value} =  e.target
       setFormData({
        ...formData, 
        [name] : value
       })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        let errors = validate(formData)
        console.log(errors)
        setFormError(errors);

        let errorKey = Object.keys(errors);
        if(errorKey.length == 0){
            // let the user to register
            setFSubmit(true)
        }else{
            setFSubmit(false)
        }


    }

    const validate =(data)=>{
        let error = {}
        if(data.firstname.trim() == ""){
           error.firstname = "Please enter the firstname"
        }
        if(data.lastname.trim() == ""){
            error.lastname = "Please enter the lastname"
        }
        if(data.email.trim() == ""){
            error.email = "Please enter the email"
        }
        if(data.phoneNumber.trim() == "" || data.phoneNumber.trim().length < 10){
            error.phoneNumber = "Please enter the phone number"
        }
        return error;
    }
   

   
    return (
        <>
        <div className="form-parent">
            <form onSubmit={formSubmit}>
                <div>
                    {fSubmit && <p id="p">Sucessfully Registered 😊!</p> }
              
                    
                </div>
                <h2 id="h2">REGISTRATION FORM</h2>

                <div className="box">
                <label htmlFor="firstname">Enter first name</label>
                <input type="text"id="text" name="firstname" placeholder="first name"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.firstname ? <p>{formError.firstname}</p> : ""}
                </div>

                

               <div className="box2">
               <label htmlFor="lastname">Enter last name</label>
                <input type="text" id="text" name="lastname" placeholder="last name"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.lastname ? <p>{formError.lastname}</p> : ""}
               </div>

               <div className="box3">
               <label htmlFor="email">Enter email</label>
                <input type="email" id="text"  name="email" placeholder="email"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.email ? <p>{formError.email}</p> : ""}

               </div>

               <div className="box4">
               <label htmlFor="phoneNumber">Enter mobile number</label>
                <input type="number" id="text"  name="phoneNumber" placeholder="phone number"
                onChange={handleInput}
                style={{ textAlign: "center" }}
                />
                {formError.phoneNumber ? <p>{formError.phoneNumber}</p> : ""}


               </div>

                

                <input type="submit" id="text1" value={"Register"} />
            </form>
        </div>

        </>
    )
}

export default Forms;