import { useEffect, useState } from "react";
import { callUsersApi } from "../api/adminApi";
import { Admin } from "../components/Admin";

export const AdminPage = () => {
  const [usersInfo, setUsersInfo] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    callUsersApi(token).then((res) => {
      setUsersInfo(res);
    });
  }, []);
  return <Admin usersInfo={usersInfo} />;
};
