import { useRouter } from "next/router";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/initializeFirebase";
import useFirebase from "../lib/useFirebase";

export default function Username() {
  const { user } = useFirebase();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  let username = userName;

  const handleSubmit = () => {
    try {
      const payload = { username, name, email:user.email, uid:user.uid };
      setDoc(doc(db, "username", username), {
        payload,
      });
      console.log("details updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center min-h-screen"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="">
        <div>
          <div>
            <h3 className="text-2xl leading-6 font-medium text-gray-900">
              Setup yout Profile
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4 flex flex-col gap-5">
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm text-sm gap-3">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  Name
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={name}
                  placeholder="username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  autoComplete="username"
                  className="text-black p-2 flex-1 bg-slate-100 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-r-md sm:text-sm border-gray-300"
                />
              </div>

              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  appstagram/
                </span>
                <input
                  type="text"
                  name="username"
                  value={userName}
                  id="username"
                  placeholder="username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  autoComplete="username"
                  className="text-black p-2 flex-1 bg-slate-100 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              handleSubmit();
              router.push("/");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
