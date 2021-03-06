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
  ContentConatainer,
} from "./upload-image.styles";
import ReactS3Client from "react-aws-s3-typescript";

interface UploadImageProps {
  setIsImageRendered: any;
}

function UploadImage(props: UploadImageProps) {
  const { setIsImageRendered } = props;
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
      setIsImageRendered(false);
      setError("You can only upload images");
      return false;
    }

    try {
      setLoading(true);
      const response = await s3.uploadFile(imageUrl, imageName);
      setLoading(false);
      setIsImageRendered(true);
      setImagePreviewUrl(response.location);
    } catch (exception: any) {
      setError(exception);
    }
  };

  return (
    <UploadImageContainer isImageRendered={imagePreviewUrl ? true : false}>
      <ContentConatainer>
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
      </ContentConatainer>
    </UploadImageContainer>
  );
}

export default UploadImage;
