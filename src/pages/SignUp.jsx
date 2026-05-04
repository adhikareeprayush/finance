import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ICONS } from "../assets/Assets";
import { createUser } from "../lib/auth/auth";
import { useAuth } from "../providers/AuthProvider";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Validate form
      if (!formData.email || !formData.password) {
        throw new Error("Please fill in all fields");
      }

      // Attempt login
      const response = await createUser(formData);

      // Update auth context
      await login(response.user);

      // Redirect to intended page or dashboard
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login failed:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen h-screen overflow-hidden grid-cols-6 w-full">
      <div className="xl:col-span-4 lg:col-span-3 lg:block hidden h-full">
        <img
          src="https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?_gl=1*1joh4na*_ga*MTQ5NTQ1NTUxMy4xNzU4MjU2NDQw*_ga_8JE65Q40S6*czE3NTgyNTY0NDAkbzEkZzEkdDE3NTgyNTY0NzAkajMwJGwwJGgw"
          alt=""
          className="brightness-75 h-full w-full object-cover"
        />
      </div>
      <div className="xl:col-span-2 lg:col-span-3 col-span-6 h-full px-6 py-8 bg-white flex flex-col justify-between">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <img
                src={ICONS.logo}
                alt="LedgerLens logo"
                className="size-12 shrink-0 rounded-xl object-contain shadow-lg shadow-neutral-900/10 ring-1 ring-black/10"
              />
              <h3 className="text-xl font-semibold text-dark">LedgerLens</h3>
            </div>
            <Link
              to="/"
              className="text-xs font-semibold text-primary hover:underline shrink-0"
            >
              ← Home
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-xl font-semibold text-dark">
              Nice to See you again
            </h3>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 w-full"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="firstName" className="text-xs font-normal">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                    className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080] disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="lastName" className="text-xs font-normal">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                    className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080] disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="email" className="text-xs font-normal">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080] disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="password" className="text-xs font-normal">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080] disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="confirmPassword"
                  className="text-xs font-normal"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                  className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080] disabled:opacity-50"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.agreeToTerms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeToTerms: e.target.checked,
                      })
                    }
                    required
                    disabled={isLoading}
                    className="w-4 h-4 rounded-md accent-primary disabled:opacity-50"
                  />
                  <span className="text-dark text-right text-xs tracking-wide">
                    Agree to terms and conditions
                  </span>
                </div>
                <Link
                  to="#"
                  className="text-primary text-right text-xs tracking-wide"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full rounded-md cursor-pointer bg-primary py-2.5 px-6 font-roboto text-base font-bold tracking-wide leading-5 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <div className="flex items-center justify-center text-center w-full  gap-1">
              <p className="text-dark text-right text-xs tracking-wide">
                Already have an account?
              </p>
              <Link
                to="/login"
                className="text-primary text-right text-xs tracking-wide"
              >
                Sign In Now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-dark text-right text-xs tracking-wide">
            © LedgerLens 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
