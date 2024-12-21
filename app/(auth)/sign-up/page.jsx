import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center items-center bg-gray-200 p-5 min-h-screen">
      <section className="flex flex-col gap-6 items-center w-full max-w-md">
        {/* Title outside the white box */}
        {/* <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-gray-800">BD Giftbox</h1>
        </div> */}

        {/* Login Form inside the white box */}
        <div className="flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Sign-Up | BD Giftbox
          </h2>
          <form className="flex flex-col gap-4">
            <input
              placeholder="Enter Your Email"
              type="email"
              name="user-email"
              id="user-email"
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <input
              placeholder="Enter Your Password"
              type="password"
              name="user-password"
              id="user-password"
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Button color="primary" className="w-full">
              Login
            </Button>
          </form>

          {/* Links */}
          <div className="flex justify-between items-center text-sm">
            <Link
              href="/sign-up"
              className="font-medium text-blue-600 hover:underline"
            >
              Create Account
            </Link>
            <Link
              href="/forget-password"
              className="font-medium text-blue-600 hover:underline"
            >
              Forget Password?
            </Link>
          </div>
        </div>
        <div className="w-full relative flex items-center justify-center">
          {/* <span className="absolute inset-x-0 h-px bg-gray-300"></span> */}
          <span className=" px-3 text-gray-500 text-sm">OR</span>
        </div>
        {/* Google Login Button */}
        <Button
          color=""
          className="w-full flex items-center justify-center gap-2 border border-gray-300"
        >
          {/* <img src="/google-icon.png" alt="Google Icon" className="h-5 w-5" /> */}
          Sign In With Google
        </Button>
      </section>
    </main>
  );
}
