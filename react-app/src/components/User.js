import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const location = useSelector((state) => state.location);
  console.log(location, "location gerom user.js");
  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);
  if (!user) {
    return null;
  }
  return (
    <ul>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
