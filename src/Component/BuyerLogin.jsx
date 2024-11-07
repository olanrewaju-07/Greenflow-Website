import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa6";

export default function BuyerLogin () {
  return(
    <div className="flex flex-col">
      <div className="flex flex-col mt-3 border border-green-950 rounded-xl p-5 mb-5 shadow-xl bg-gray-100 tablet:w-[90%] tablet:ml-8 mobile:w-full mobile:ml-0">
        <form className="w-full space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950">Username or Email</label>
            <input 
            type="text"
             name="text" 
             id="text" 
             placeholder="Enter your username or email"
             className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" required/>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950">Password</label>
            <input 
            type="password"
             name="password" 
             id="password" 
             placeholder="Enter your password"
             className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" required/>
          </div>

          <div className="flex flex-row items-center mt-6 gap-3">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <span className="text-black opacity-80 text-[13px]">Agree to the terms and condition</span>
                    </div>

                    <Link to='/home' type="submit" className=" flex items-center justify-center w-full border-none rounded-lg bg-green-600 p-1 text-[15px] text-white mt-4 hover:bg-green-700">
                        Login
                    </Link>

                    <div className="flex flex-row justify-between items-center mt-4">
                        <span className="text-[12px] font-semibold">
                            Dont have an account?{" "}
                            <Link to="/signup" className="text-green-950">
                                Signup here
                            </Link>
                        </span>
                    </div>
        </form>
      </div>
      <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-4">
            <hr  className="w-[200px] border border-green-950 tablet:border-white tablet:w-full" />
            <span className="tablet:text-white tablet:font-bold tablet:border-white">Or</span>
            <hr  className="w-[200px] border border-green-950 tablet:border-white tablet:w-full"/>
          </div>

          <div className="flex flex-col gap-3 mobile:mb-10 tablet:items-center">
            <button className="w-full mobile:w-full tablet:w-[50%] border flex flex-row items-center justify-center gap-4 border-green-950 rounded-lg bg-none p-2 text-[15px] mt-4 hover:bg-green-100 tablet:border-none tablet:bg-white tablet:text-green-950"><FaGoogle /> Continue with Google</button>
            <button className="w-full mobile:w-full tablet:w-[50%] border flex flex-row items-center justify-center gap-4 border-green-950 rounded-lg bg-none p-2 text-[15px] mt-4 hover:bg-green-100 tablet:border-none tablet:bg-white tablet:text-green-950"><FaApple className="" /> Continue with Apple</button>
        </div>
        </div>
    </div>
  )
}