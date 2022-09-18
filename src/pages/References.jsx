import React, { useContext } from "react";
import Layout from "../containers/Layout";
import NavigationLayout from "../containers/NavigationLayout";
import { UserContext } from "../context/UserContext";
import { signOutUser } from "../utils/signOut";

const References = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <NavigationLayout>
        <div className="References">
          <h3>Nombre de usuario</h3>
          <p>{user.name}</p>
          <h3>Mi motivo es...</h3>
          <p>{user.reason}</p>
          <div className="References_actions">
            <button onClick={() => signOutUser()}>Cerrar sesion</button>
          </div>
        </div>
      </NavigationLayout>
    </Layout>
  );
};

export default References;
