import { useEffect, useState } from "react";
import { callProfileApi } from "../api/profileApi";
import { Header } from "../components/Header";
export const AuthenticatedLayout = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    callProfileApi(JSON.stringify(token)).then(
      (res) => (
        setUserInfo({ username: res.username, email: res.email }),
        console.log(res)
      )
    );
  }, []);
  return (
    <div>
      <Header username={userInfo.username} email={userInfo.email} />
      <main>{children}</main>
    </div>
  );
};
