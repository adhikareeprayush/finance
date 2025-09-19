import { Link } from "react-router-dom";
import { ICONS } from "../assets/Assets";
const Login = () => {
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
          <div className="flex items-center gap-2">
            <img src={ICONS.logo} alt="" className="size-12 object-contain" />
            <h3 className="text-xl font-semibold text-dark">Fundo</h3>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-xl font-semibold text-dark">
              Nice to See you again
            </h3>
            <form className="flex flex-col gap-3 w-full ">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="email" className="text-xs font-normal">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080]"
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
                  className="w-full bg-[#F2F2F2] font-roboto px-3 py-4 rounded-lg text-base leading-5 text-[#808080]"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="text-dark text-right text-xs tracking-wide">
                    Remember me
                  </span>
                </div>
                <Link
                  to="#"
                  className="text-primary text-right text-xs tracking-wide"
                >
                  Forgot your password?
                </Link>
              </div>
              <Link to="/dashboard" className="w-full">
                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-md cursor-pointer bg-primary py-2.5 px-6 font-roboto text-base font-bold tracking-wide leading-5 text-white"
                >
                  Sign In
                </button>
              </Link>
            </form>
            <div className="flex items-center justify-center text-center w-full  gap-1">
              <p className="text-dark text-right text-xs tracking-wide">
                Don't have an account?
              </p>
              <Link className="text-primary text-right text-xs tracking-wide">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-dark text-right text-xs tracking-wide">
            @Fundo 2025{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
