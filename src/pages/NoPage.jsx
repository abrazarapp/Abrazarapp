import React from "react";
import Layout from "../containers/Layout";
import NavigationLayout from "../containers/NavigationLayout";
import "../styles/NoPage.css";

const NoPage = () => {
  return (
    <Layout>
      <NavigationLayout>
        <div className="NoPage">
          <p>Estamos trabajando para hacer esta seccion de la mejor manera posible.</p>
          <p>
            Si te interesa saber mas o participar del proyecto nos podes escribir a <a href="mailto:abrazarapp@gmail.com">abrazarapp@gmail.com</a>
          </p>
        </div>
      </NavigationLayout>
    </Layout>
  );
};

export default NoPage;
