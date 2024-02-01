import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitted } } = useForm();


    const handleSubmitForm = (data) => {
        console.log(data)
    }


    console.log(isSubmitSuccessful)

    return (
        <>
            <div className="parent-container">
                <h1>Registration Form</h1>
                <form  id="main-form" onSubmit={handleSubmit(handleSubmitForm)}>
                    { isSubmitSuccessful && <p>Registration is Successful 🤩!</p>}
                    <label htmlFor="firstname">Enter firstname : </label>
                    <input type="text" placeholder="firstname"
                        {...register("firstname", {
                            required: "firstname is required"
                        })}
                    />
                    {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}

                    <label htmlFor="lastname">Enter lastname : </label>
                    <input type="text" placeholder="lastname"
                        {...register("lastname", {
                            required: "lastname is required"
                        })}
                    />
                    {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}



                    <label htmlFor="email">Enter email : </label>
                    <input type="email" placeholder="enter email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,}/,
                                message: "Format is not correct"
                            }
                        })}

                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}


                    <label htmlFor="password">Enter password : </label>
                    <input type="password" placeholder="enter password"
                        {...register("password", {
                            required: "password is required",
                            minLength: {
                                value: 5,
                                message: "minimum length should be 5"
                            },
                            pattern: {
                                value : /[a-zA-Z0-9]/,
                                message: "Password should be minimum 5 to 20 words"
                            }
                        })}

                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}


                    <input type="submit" value={"Register"} />
                </form>
            </div>

        </>
    )
}

export default Form;