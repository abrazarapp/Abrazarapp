// import React, { useContext } from "react";
import NavigationLayout from "../containers/NavigationLayout";
import Layout from "../containers/Layout";
// import { UserContext } from "../context/UserContext";
import "../styles/Help.css";
import "../styles/HelpNavCard.css";
import { helpNavs } from "../utils/helpNavs";

import { Link } from "react-router-dom";

const HelpNavCard = ({ image, text }) => (
  <Link to={`/help/${text}`}>
    <div className="HelpNavCard">
      <div className="HelpNavCard_img">
        <img src={image} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  </Link>
);

const Help = () => {
  // const { user } = useContext(UserContext);

  return (
    <Layout>
      <NavigationLayout>
        <div className="Help">
          <h2>En esta sección encontrarás toda la ayuda que necesitas</h2>
          {helpNavs.map(({ image, text }) => (
            <HelpNavCard key={`helpnavcard-${text}`} image={image} text={text} />
          ))}
          {/* <p>Sabemos que es un proceso complicado, te recomendamos que te comuniques con alguien de confianza y le cuentes por lo que estas pasando. Recorda que es algo normal.</p>
          <p>A continuación te dejamos cierta información importante para que tengas a disposición:</p>
          <div className="Help_links">
            <a target="_blank" rel="noreferrer" href="https://aa.org.ar/grupos-virtuales-argentina/">
              Reuniones virtuales de Alcoholicos Anonimos
            </a>
            <a target="_blank" rel="noreferrer" href="https://aa.org.ar/grupos-aa/">
              Reuniones presenciales de Alcoholicos Anonimos
            </a>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5491122926686">
              Whatsapp de Alcoholicos Anonimos
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.argentina.gob.ar/servicio/recibir-atencion-ante-el-consumo-problematico-de-sustancias-psicoactivas">
              Asistencia inmediata Sedronar
            </a>
            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/0xLA1OtEYiULf7h71H4Wly">
              Meditación guiada en Spotify
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/playlist?list=PLq6Xx0w_9LD3HycuRVVuJ-R-zqTLIj1B8">
              Meditación de Deepak Chopra
            </a>
          </div>
          <p>
            Si pensas que podemos agregar alguna información aqui, nos la podes enviar a <a href="mailto:abrazarapp@gmail.com">abrazarapp@gmail.com</a> y la vamos a estar evaluando y subiendo a la
            app.
          </p> */}
        </div>
      </NavigationLayout>
    </Layout>
  );
};

export default Help;
