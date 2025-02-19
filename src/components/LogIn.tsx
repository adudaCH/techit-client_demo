import { FormikValues, useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import * as yup from "yup";
import { checkUser } from "../services/userService";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";
import { errorMsg } from "../services/toastify";
import { UserContext } from "../context/userContext";
interface LogInProps {}

const LogIn: FunctionComponent<LogInProps> = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext) || {};
    const formik: FormikValues = useFormik<User>({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        }),
        onSubmit: (values) => {
            checkUser(values)
                .then((res) => {
                    if (res.data.length) {
                        navigate("/home");
                        localStorage.setItem(
                            "userId",
                            JSON.stringify(res.data[0].id)
                        );
                        if (setUser) setUser(res.data[0]);
                    } else {
                        errorMsg("User not found");
                    }
                })
                .catch((err) => console.log(err));
        },
    });

    return (
        <div className="container-fluid w-25 mt-5">
            <h1 className="display-3 text-center mt-5">LOGIN</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput2">Email address</label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                    )}
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-danger">{formik.errors.password}</p>
                    )}
                </div>
                <button
                    className="btn btn-dark mt-3 w-100"
                    type="submit"
                    disabled={!formik.dirty || !formik.isValid}>
                    Login
                </button>
            </form>
            <p className="mt-3">
                <Link to="/register">New user? Register now</Link>
            </p>
        </div>
    );
};
export default LogIn;
