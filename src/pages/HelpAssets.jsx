import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../containers/Layout";
import NavigationLayout from "../containers/NavigationLayout";
import { helpNavs } from "../utils/helpNavs";
import "../styles/HelpAssets.css";

const HelpAssets = () => {
  const { id } = useParams();

  const { text, resources } = helpNavs.filter((nav) => nav.text === id)[0];

  return (
    <Layout>
      <NavigationLayout>
        <div className="HelpAssets">
          <h2>{text}</h2>
          <p className="HelpAssets_description">Hace click en los enlaces para acceder a los recursos disponibles</p>
          <div className="HelpAssets_items">
            {resources.map((item) => (
              <div className="HelpAssets_item" key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </NavigationLayout>
    </Layout>
  );
};

export default HelpAssets;
