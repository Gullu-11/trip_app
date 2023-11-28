import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login_container">
      <img className="login_img" src="./images/loginImg.png" alt="" />
      <div className="login_section">
      <Link to="/"><img className="logo_sign" src="./images/Logo.png" alt="" /></Link>
        <div className="form_section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Sign in for your exciting journey</h3>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="someone@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="•••••••••••"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <span>Forgot password?</span>

            <button className="sign" type="submit">
              Sign in
            </button>
          </form>
          <p className="account top">
            Don’t have an account?<a>Create one for a new adventure!</a>{" "}
          </p>

          <div className="social_section">
            <p>or use one of these</p>
            <div className="btn_img">
              <button>
                <img src="./images/google.png" alt="" />
              </button>
              <button>
                <img src="./images/apple.png" alt="" />
              </button>
              <button>
                <img src="./images/facebook.png" alt="" />
              </button>
            </div>
          </div>

          <p className="account bottom">
            Don’t have an account?<span>Create one for a new adventure!</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
