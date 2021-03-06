import styled from "styled-components";
import { React, useState } from "react";
import Header from "./Components/Header/Header";
import ImageUploader from "./Components/ImageUploader/ImageUploader";
import Detector from "./Components/Detector/Detector";
import Ingredients from "./Components/Ingredients/Ingredients";
const API_KEY = Buffer.from("OTU3MGY5YzM2YmM3NGYwODkyZmZiZTk2ZGI2ZjlkYjY=", 'base64').toString('ascii');

const AppStyle = styled.div`
  text-align: center;
`;
const TableWrapper = styled.div`
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  const [images, setImages] = useState([]);
  const [detected, setDetected] = useState([]);

  return (
    <AppStyle>
      <Header />
      <ImageUploader images={images} setImages={setImages} />
      <Detector API_KEY={API_KEY} images={images} setDetected={setDetected} />
      <br />
      <TableWrapper>
        <Ingredients detected={detected} />
      </TableWrapper>
      <br />
    </AppStyle>
  );
};

export default App;
