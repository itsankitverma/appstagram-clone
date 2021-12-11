import React from "react";
import useFirebase from "../lib/useFirebase";

function Login() {
  const { handleLoginWitgGoogle } = useFirebase();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <p className="text-lg">
        Login to <b>Appstagram</b> with
      </p>
      <button
        className="p-3 rounded-lg bg-slate-100 shadow-xl border-[1px] border-black flex items-center justify-center gap-1"
        onClick={handleLoginWitgGoogle}
      >
        <p>Sign In with</p>
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          className="w-6 "
        />
      </button>
    </div>
  );
}

export default Login;
