import React from "react";
import ImageUploading from "react-images-uploading";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import PropTypes from 'prop-types';

const ImageUploader = ({ images, setImages }) => {
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {images.length === 0 && (
              <>
                <br />
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<CloudUploadIcon />}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Upload Image
                </Button>
                <br /><br />
                Upload an image to detect food ingredients.
              </>
            )}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                  <br />
                <img src={image["data_url"]} alt="" width="200" />
                <div className="image-item__btn-wrapper">
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<UpdateIcon />}
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

ImageUploader.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func.isRequired,
};

export default ImageUploader;
