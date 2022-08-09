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
          <h3>{user.name}</h3>
          <div className="References_centers">
            <p>Estos son los centros especializados</p>
            <a target="_blank" rel="noreferrer" href="https://centroethos.com.ar/">
              Centro Ethos
            </a>
            <a target="_blank" rel="noreferrer" href="https://manantiales.org/">
              Manantiales
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.buenosaires.gob.ar/salud/centros-de-atencion-en-adicciones">
              Centro de atención a las adicciones CABA
            </a>
          </div>
          <div>
            <p>
              Queres compartir tu centro o te gustaría aparecer aqui, nos podes contactar a <a href="mailto:abrazarapp@gmail.com">abrazarapp@gmail.com</a>
            </p>
          </div>
          <div className="References_actions">
            <button onClick={() => signOutUser()}>Cerrar sesion</button>
          </div>
        </div>
      </NavigationLayout>
    </Layout>
  );
};

export default References;
