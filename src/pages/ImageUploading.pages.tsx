import React, { useState } from "react";

import UploadImage from "../components/UploadImage/UploadImage.component";
import Map from "../components/Map/Map.components";
import {
  ImageUploadingContainer,
  MainContainer,
} from "./image-uploading.styles";
import ImageInformation from "../components/ImageInformation/ImageInformation.component";
function ImageUploading() {
  const [isImageRendered, setIsImageRendered] = useState(false);
  const [isDataGenerated, setIsDataGenerated] = useState(false);

  return (
    <MainContainer>
      <ImageUploadingContainer>
        <UploadImage setIsImageRendered={setIsImageRendered} />

        {isImageRendered && (
          <ImageInformation setIsDataGenerated={setIsDataGenerated} />
        )}

        {isDataGenerated && <Map />}
      </ImageUploadingContainer>
    </MainContainer>
  );
}

export default ImageUploading;
