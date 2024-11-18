import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FormikValues, useFormik } from "formik";
import { User } from "../interfaces/User";
import { addUser } from "../services/userService";



interface RegisterProps {

}

const Register: FunctionComponent<RegisterProps> = () => {

    const navigate = useNavigate();

    const formik: FormikValues = useFormik<User>({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            email: yup.string().required().email(),
            password: yup.string().required().min(8)
        }),
        onSubmit: (values) => {
            addUser({...values, isAdmin:false}).then((res)=>{
                navigate('/home')
            localStorage.setItem("userId", JSON.stringify(res.data.id));

            })      
        },
    });




    return (<>
        <div className="container mt-3 w-50">
            <h2 className="display-3">Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Jhon"
                        value={formik.values.name}
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="floatingInput">Name</label>
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-danger">{formik.errors.name}</p>
                    )
                    }
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com"
                        value={formik.values.email}
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="floatingInput2">Email address</label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                    )
                    }
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-danger">{formik.errors.password}</p>
                    )
                    }
                </div>
                <button className="btn btn-primary mt-3 w-100" type="submit" disabled={!formik.dirty || !formik.isValid}>Submit</button>
            </form>
            <p className="mt-3">
                <Link to="/">Already have an account? Log in!</Link>
            </p>
        </div>
    </>
    );
}


export default Register;