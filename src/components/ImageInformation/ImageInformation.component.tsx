import CustomButton from "../CustonButton/CustonButton.component";
import { Form, FormLabel, Spinner } from "./image-information.styles";
import FormInput from "../FormInput/FormInput.component";
import React, { useState } from "react";
import axios from "axios";

function ImageInformation() {
  const [imageData, setImageData]: any = useState("");
  const [loading, setLoading] = useState(false);
  const handleGenerateData = async () => {
    setLoading(true);
    const ImageInfo = await axios.get(
      "https://uploaded-images-map.s3.eu-central-1.amazonaws.com/imageData.json"
    );
    setImageData(ImageInfo.data);
    setLoading(false);
  };

  return (
    <div>
      <Form>
        <FormLabel>
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
        </FormLabel>

        <FormInput
          type="text"
          required={true}
          label="Default label"
          defaultValue={imageData ? imageData["data0"] : ""}
        ></FormInput>
        <FormInput
          type="text"
          required={true}
          label="Default label"
          defaultValue={imageData ? imageData["data1"] : ""}
        ></FormInput>
        <FormInput
          type="text"
          required={true}
          label="Default label"
          defaultValue={imageData ? imageData["data2"] : ""}
        ></FormInput>
        <FormInput
          type="text"
          required={true}
          label="Default label"
          defaultValue={imageData ? imageData["data3"] : ""}
        ></FormInput>
        <FormInput
          type="text"
          required={true}
          label="Default label"
          defaultValue={imageData ? imageData["data4"] : ""}
        ></FormInput>
        <FormInput
          type="text"
          required={true}
          label="Default label"
          defaultValue={imageData ? imageData["data5"] : ""}
        ></FormInput>
      </Form>
    </div>
  );
}

export default ImageInformation;
