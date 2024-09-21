import GoogleSignInButton from "./GoogleSignInButton";

export default function SignIn() {
  return (
    <div className="flex items-center m-6 mb-10">
      <input
        type="text"
        className="border rounded input-sm p-2 text-sm"
        placeholder="Username"
      />
      <input
        type="password"
        className="border rounded input-sm p-2 ml-2 text-sm"
        placeholder="Password"
      />
      <button className="btn btn-primary btn-sm ml-2 bg-[#641ae6] text-[#f1f3f5] uppercase">
        Login
      </button>
      <GoogleSignInButton/>
    </div>
  )
}