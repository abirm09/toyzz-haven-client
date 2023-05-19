import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const { logInWithEmail, logInWithGoogle, setRedirectLink } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";
  const navigate = useNavigate();
  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");
    logInWithEmail(email, password)
      .then(() => {
        navigate(from);
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.message.split("/")[1].replace(")", ""));
      });
  };
  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(res => {
        console.log(res.user);
        navigate(from);
      })
      .catch(err => {
        setErrorMessage(err.message.split("/")[1].replace(")", ""));
      });
  };
  const handleRedirectRegister = () => {
    setRedirectLink(from);
    navigate("/registration");
  };
  return (
    <section className="mt-20">
      <div className="cs-container">
        <div className="max-w-xl w-full mx-auto border p-10">
          <h2 className="text-xl font-poppins font-bold cs-text-gradient mb-3">
            Log in
          </h2>
          <form onSubmit={handleLogIn}>
            <div className="cs-form">
              <label htmlFor="email">Your email *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
              />
            </div>
            <div className="cs-form">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            {errorMessage && (
              <p className="text-red-600 mb-5 font-semibold font-poppins">
                Error : {errorMessage}
              </p>
            )}
            <input type="submit" value="Login" className="cs-btn-primary" />
          </form>
          <div className="divider font-poppins font-bold">OR</div>
          <button
            className="flex items-center gap-3 border w-full rounded-full p-1"
            onClick={handleGoogleLogin}
          >
            <img
              className="w-8"
              src="https://i.ibb.co/6NBjMQN/google.png"
              alt="Google"
            />
            <span className="flex-grow font-poppins font-semibold">
              Continue with google
            </span>
          </button>
          <div className="mt-5">
            <p className="font-poppins font-semibold text-center text-sm">
              New to <span>Toyzz haven</span> ?{" "}
              <button
                onClick={handleRedirectRegister}
                className="cs-text-gradient"
              >
                Registration
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
