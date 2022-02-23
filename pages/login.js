import React from "react";
// import {InputBase} from "InputBase";

function Login() {
  return (
    <div>
      <div className="flex flex-col w-full items-center p-4">
        <p className=" text-teal-500 font-bold mb-4">LOG IN</p>
        <div class="w-full lg:w-1/3 px-2 mb-6 lg:mb-0 flex flex-col items-center justify-center">
          <div class="bg-white shadow rounded-lg">
            <div class="p-4">
              <div class="mb-4">
                <label
                  for="email"
                  class="uppercase text-sm tracking-wide font-semibold text-grey-darker px-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-100 w-full leading-normal py-2 px-3 rounded border-b border-gray-400 mt-2 focus:outline-none"
                />
              </div>
              <div class="mb-4">
                <label for="password" class=" text-sm tracking-wide font-semibold px-2">
                  Password
                  <small class="lowercase tracking-normal">
                    <a href="#" class="no-underline text-blue-500 ml-2">
                      forgot?
                    </a>
                  </small>
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-100 w-full leading-normal py-2 px-3 rounded border-b border-gray-400 mt-2 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              class="uppercase font-bold text-white w-full bg-blue-600 text-lg rounded-b-lg p-3"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
