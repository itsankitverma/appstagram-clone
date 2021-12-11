import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MixedComponent from "../components/MixedComponent";
import useFirebase from "../lib/useFirebase";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../lib/initializeFirebase";
import { useRouter } from "next/router";

function Index() {
  const { user } = useFirebase();
  const router = useRouter();
  const [details, setDetails] = React.useState({
    uid: "",
    username: null,
    image: null,
    id: "",
    name: "",
  });

  const userData = async () => {
    const q = query(collection(db, "username"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data().payload,
      id: doc.id,
    }));
    console.log(user);
    data.map(async (v) => {
      console.log(v);
      if (user?.uid === v.uid) {
        setDetails({
          uid: v.uid,
          image: v.profileImage,
          username: v.username,
          id: v.id,
          name: v.name,
        });
      }
    });
  };

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    } else {
      userData();
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center ">
        <MixedComponent details={details} />
      </div>
    </div>
  );
}

export default Index;
