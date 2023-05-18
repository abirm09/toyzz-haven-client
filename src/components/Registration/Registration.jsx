import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUSerWithEmail, logInWithGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value || null;
    const email = form.email.value;
    const photo = form.photo.value || null;
    const password = form.password.value;
    const submit = form.submit;
    setErrorMessage("");
    submit.setAttribute("disabled", true);
    // console.log(email, password, name, photo);
    createUSerWithEmail(email, password)
      .then(res => {
        sendUserData(res.user, name, photo);
        console.log(res.user);
      })
      .catch(err => {
        setErrorMessage(err.message.split("/")[1].replace(")", ""));
        // console.log();
        submit.removeAttribute("disabled");
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        setErrorMessage(err.message.split("/")[1].replace(")", ""));
      });
  };

  const sendUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  return (
    <section className="mt-20">
      <div className="cs-container">
        <div className="max-w-xl w-full mx-auto border p-10">
          <h2 className="text-xl font-poppins font-bold cs-text-gradient mb-3">
            Register here
          </h2>
          <form onSubmit={handleRegister}>
            <div className="cs-form">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" placeholder="Abir mahmud" />
            </div>
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
              <label htmlFor="photo">Photo URL</label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="http://www.example.com/photo.jpg"
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
            <input
              type="submit"
              value="Register"
              name="submit"
              className="cs-btn-primary"
            />
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
              Already have an account ?{" "}
              <Link to="/login" className="cs-text-gradient">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
