import CustomButton from "../CustonButton/CustonButton.component";
import {
  ContentContainer,
  ContentLabel,
  Spinner,
  ImageInformationContainer,
} from "./image-information.styles";
import FormInput from "../ContentInput/ContentInput.component";
import React, { useState } from "react";
import axios from "axios";

interface ImageInformationProps {
  setIsDataGenerated: any;
}

function ImageInformation(props: ImageInformationProps) {
  const { setIsDataGenerated } = props;
  const [imageData, setImageData]: any = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateData = async () => {
    setLoading(true);
    const ImageInfo = await axios.get(
      "https://uploaded-images-map.s3.eu-central-1.amazonaws.com/imageDatas.json"
    );
    setImageData(ImageInfo.data);
    setIsDataGenerated(true);
    setLoading(false);
  };

  return (
    <ImageInformationContainer>
      <ContentContainer>
        <ContentLabel>
          <h1>Image Information</h1>
          <CustomButton
            type="button"
            onClicks={() => {
              handleGenerateData();
            }}
          >
            <span>Generate data</span>
            {loading && <Spinner />}
          </CustomButton>
        </ContentLabel>

        <FormInput
          label="Default label"
          defaultValue={imageData ? imageData["data0"] : ""}
        ></FormInput>
        <FormInput
          label="Default label"
          defaultValue={imageData ? imageData["data1"] : ""}
        ></FormInput>
        <FormInput
          label="Default label"
          defaultValue={imageData ? imageData["data2"] : ""}
        ></FormInput>
        <FormInput
          label="Default label"
          defaultValue={imageData ? imageData["data3"] : ""}
        ></FormInput>
        <FormInput
          label="Default label"
          defaultValue={imageData ? imageData["data4"] : ""}
        ></FormInput>
        <FormInput
          label="Default label"
          defaultValue={imageData ? imageData["data5"] : ""}
        ></FormInput>
      </ContentContainer>
    </ImageInformationContainer>
  );
}

export default ImageInformation;
