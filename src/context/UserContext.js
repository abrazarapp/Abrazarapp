import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getUser } from "../utils/getUser";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user.uid).then((userInfo) => {
          console.log({ credentials: user, ...userInfo });
          setUser({ credentials: user, ...userInfo });
          if (user?.isAnonymous) {
            const localUser = JSON.parse(localStorage.getItem("user"));
            setUser({ credentials: user, ...localUser });
          }
        });
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
