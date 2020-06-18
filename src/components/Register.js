import { useState } from "react";
import Link from "next/link";
import Input from "./common/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  return (
    <div>
      <div className="w-full flex flex-wrap">
        {/* <!-- Login Section --> */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              Logo
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type={"text"}
                id={"name"}
                placeholder={"John Doe"}
                htmlFor={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type={"email"}
                id={"email"}
                placeholder={"John Doe"}
                htmlFor={"your@email.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type={"password"}
                id={"password"}
                placeholder={"Password"}
                htmlFor={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                label={"Confirm Password"}
                type={"password"}
                id={"password2"}
                placeholder={"Password"}
                htmlFor={"password"}
                value={passwordConfirm}
                onChange={(e) => setpasswordConfirm(e.target.value)}
              />

              <input
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Have an account?{" "}
                <Link href="/login">
                  <a href="/login" className="underline font-semibold">
                    Login here.
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Image Section --> */}
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
