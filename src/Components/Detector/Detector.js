import { React, useEffect } from "react";
import Clarifai from "clarifai";
import PropTypes from "prop-types";

const Detector = ({ API_KEY, images, setDetected }) => {
  const app = new Clarifai.App({ apiKey: API_KEY });

  const detect = async (image) => {
    try {
      const data = await app.models.predict(Clarifai.FOOD_MODEL, image);
      data.rawData.outputs[0].data.concepts.forEach((element) => {
        element.value = `${parseFloat(element.value * 100).toFixed(2)} %`;
      });
      setDetected(data.rawData.outputs[0].data.concepts);
    } catch (err) {
      console.log(err);
      setDetected([]);
    }
  };

  useEffect(() => {
    if (images.length > 0) {
      const temp = images[0].data_url;
      const parsed = temp.split(",");
      const image = parsed[1];
      detect(image);
    }
  }, [images]);

  return <></>;
};

Detector.propTypes = {
  API_KEY: PropTypes.string.isRequired,
  images: PropTypes.array,
  setDetected: PropTypes.func.isRequired,
};

export default Detector;
