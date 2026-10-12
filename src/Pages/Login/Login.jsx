import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";
const Login = () => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required")
      .matches(
        /@gmail\.com$/,
        "Email must end with @gmail.com"
      ),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-lg  flex-col   bg-white rounded shadow-2xl px-8 py-18 mx-2 ">
        <h1 className="text-5xl text-center  py-8 text-black">Hello <span className="text-[#920c1b]">Login!</span> </h1>

        <form onSubmit={formik.handleSubmit} className=" ">
          <div className=" flex flex-col gap-6  ">
            <div className="">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-3  w-full p-3  outline-none rounded-4xl"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="px-3 ">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-3  p-3 w-full outline-none rounded-4xl "
              />

              {formik.touched.password && formik.errors.password && (
                <p className="px-3 ">{formik.errors.password}</p>
              )}
            </div>

            <button type="submit" className="bg-gradient-to-r from-[#b20b1f] to-[#6a1212] py-4 text-white rounded-4xl ">
              Login
            </button>

            <p className="text-center"> Don't have an account?  </p>
            <Link className="text-[#920c1b]  text-center" to="/SignUp">_______SignUp_______</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
