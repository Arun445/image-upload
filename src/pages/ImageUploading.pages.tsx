import UploadImage from "../components/UploadImage/UploadImage.component";
import { ImageUploadingContainer } from "./image-uploading.styles";
import ImageInformation from "../components/ImageInformation/ImageInformation.component";
function ImageUploading() {
  return (
    <ImageUploadingContainer>
      <UploadImage />
      <ImageInformation />
    </ImageUploadingContainer>
  );
}

export default ImageUploading;
