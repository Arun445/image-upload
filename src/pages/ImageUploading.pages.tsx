import React, { useState } from "react";

import UploadImage from "../components/UploadImage/UploadImage.component";
import { ImageUploadingContainer } from "./image-uploading.styles";
import ImageInformation from "../components/ImageInformation/ImageInformation.component";
function ImageUploading() {
  const [isImageRendered, setIsImageRendered] = useState(false);

  return (
    <ImageUploadingContainer>
      <UploadImage setIsImageRendered={setIsImageRendered} />
      <ImageInformation isImageRendered={isImageRendered} />
    </ImageUploadingContainer>
  );
}

export default ImageUploading;
