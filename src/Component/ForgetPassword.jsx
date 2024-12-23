import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export default function ForgetPassword() {

    const handleSubmit = (e) => {
      e.preventDefault();
      // handle reset password logic here, e.g., send reset link to provided email
      console.log("Reset link sent");
     // Close the modal after submission
    };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#167206]">
        <Link to="/login" className="self-start z-20">
  <FaArrowLeft className="text-white text-4xl absolute top-5 left-5" />
</Link> 
    <div className=" absolute inset-0 bg-[url('/assets/icons/Vector-8.svg')] z-0"></div>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mobile:w-[90%] z-10">
        <h3 className="text-xl font-semibold text-center mb-4">Reset Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Enter your email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customPurple"
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#167206] text-white py-2 rounded hover:bg-[#167206]"
          >
            Send Reset Link
          </button>
        </form>
        <Link to="/login"
          className="mt-4 w-full z-20 flex items-center justify-center text-[#167206] hover:underline focus:outline-none"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}


  