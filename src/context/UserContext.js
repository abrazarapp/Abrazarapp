import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getUser } from "../utils/getUser";
import { setUserId } from "firebase/analytics";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        getUser(user.uid).then((userInfo) => {
          console.log({ credentials: user, ...userInfo });
          setUser({ credentials: user, ...userInfo });
        });
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
