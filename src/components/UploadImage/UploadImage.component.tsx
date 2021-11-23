import React, { useState } from "react";
import { s3Login } from "./uploadImageS3Login";
import ErrorMessage from "../ErrorMessage/ErrorMessage.component";
import {
  Spinner,
  Input,
  Label,
  ImageContainer,
  UploadImageContainer,
  ButtonContainer,
} from "./upload-image.styles";
import ReactS3Client from "react-aws-s3-typescript";

function UploadImage() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<undefined | string>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const uploadFile = async (e: any) => {
    if (e.target.files.length === 0) {
      return false;
    }
    const imageUrl = e.target.files[0];
    const imageName = e.target.files[0].name.split(".")[0];
    const s3 = new ReactS3Client(s3Login);
    const isImage: boolean = e.target.files[0].type.includes("jpeg" && "image");
    if (!isImage) {
      setImagePreviewUrl(undefined);
      setError("You can only upload images");
      return false;
    }

    try {
      setLoading(true);
      const response = await s3.uploadFile(imageUrl, imageName);
      setLoading(false);
      setImagePreviewUrl(response.location);
    } catch (exception: any) {
      setError(exception);
    }
  };

  return (
    <UploadImageContainer>
      <ButtonContainer>
        <h1>Image Upload</h1>
        <Label>
          <span>Upload</span>
          <Input type="file" onChange={uploadFile} />
        </Label>
      </ButtonContainer>

      <ImageContainer>
        {loading ? (
          <Spinner />
        ) : imagePreviewUrl ? (
          <a href={imagePreviewUrl}>
            <img src={imagePreviewUrl} alt="Preview" />
          </a>
        ) : (
          error && <ErrorMessage>{error}</ErrorMessage>
        )}
      </ImageContainer>
    </UploadImageContainer>
  );
}

export default UploadImage;
