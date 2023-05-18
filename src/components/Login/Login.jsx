import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="mt-20">
      <div className="cs-container">
        <div className="max-w-xl w-full mx-auto border p-10">
          <h2 className="text-xl font-poppins font-bold cs-text-gradient mb-3">
            Log in
          </h2>
          <form>
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
            <input type="submit" value="Login" className="cs-btn-primary" />
          </form>
          <div className="divider font-poppins font-bold">OR</div>
          <button className="flex items-center gap-3 border w-full rounded-full p-1">
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
              <Link to="/registration" className="cs-text-gradient">
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
