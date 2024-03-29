import axios from "axios";
import { useFormik } from "formik";
import  React,{ useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate, useParams } from "react-router-dom"; // Import useParams
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { togglePasswordVisibility } from "../Utils/Utils";

export default function ResetPassword() {
  const params = useParams();
console.log(params)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
   // Get the random string from the URL

  // Define a validation schema for the form
  const validation = yup.object({
    password: yup.string().required("Password is required"),
  });

  // Function to send updated password data to the server
  

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validation,
    onSubmit: async(value)=>{
      const response = await axios.post(`/api/reset-password/${params.token}`, value);
      console.log(response)   
      try {
        formik.resetForm()
        setLoading(false);
      toast.success("Password Updated Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        
      } catch (error) {
        setLoading(false);
        setError(error.message);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }   

    },
  });

  // Function to change background for the update password button
  function changeBgUpdatePassword() {
    document.getElementById("change").classList.add("auth");
    console.log("Working changeBgUpdatePassword");
  }

  return (
    
     <div className="bg-color" >
      <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5 py-md-0">
        <div className="content row gx-0">
          <div className="col-md-5">
            <div className="image-container text-white h-100 d-flex align-items-center justify-content-center flex-column p-5 text-center"
             style={{ backgroundImage: `url(./image/Gold.jpeg)` }}>
              <h2 className="mb-3 fw-bold">Need An Account ?</h2>
              <p>Register Here</p>
              <Link to="/register">
                <button className="btn btn-outline-light fw-bold rounded-pill py-2 px-4">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-7 bg-light">
            <div className="text-center p-5">
              <h1 className="text-secondary fw-bolder">Update Password</h1>
              <form onSubmit={formik.handleSubmit}>
                {error ? <p className="text-danger ">{error}</p> : ""}
                <div className="position-relative">
                  <input
                    id="password-input"
                    type="password"
                    className="form-control mt-3"
                    placeholder="Enter Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <i
                    onClick={togglePasswordVisibility}
                    className="fa-regular fa-eye-slash eyeIcon"
                  ></i>
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <p className="fs-small ps-1 text-danger text-start">
                    {formik.errors.password}
                  </p>
                ) : (
                  ""
                )}
                <button
                  onClick={changeBgUpdatePassword}
                  id="change"
                  type="submit"
                  className="btn-style text-center mt-3 w-100"
                >
                  {loading ? (
                    <div className="d-flex justify-content-center">
                      <Oval
                        height={30}
                        width={30}
                        color="#fff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#86b7fe"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    </div>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
