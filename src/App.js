import React from "react";
import Layout from "./module/layout";
import Button from './module/button'
import "./style/style.css";

function App() {
  return (
    <React.Fragment>
      <h1>Belajar Props</h1>
      <Layout title={"Asal SMK"}>
        <h1>SMK MQ</h1>
      </Layout>
      <Layout title={"Asal SMK"}>
        <h1>SMK IDN</h1>
      </Layout>
      <Layout title={"Asal SMK"}>
        <h1>SMK 01</h1>
      </Layout>
      {/* <Layout /> */}
      <Button title={'Simpan'}/>
      <Button title={'Batal'}/>

    </React.Fragment>
  );
}

export default App;
