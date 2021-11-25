import styled from "styled-components";

export const ContentContainer = styled.form`
  width: 25vw;
  display: flex;
  flex-direction: column;
`;

export const ContentLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export const ImageInformationContainer = styled.div`
  min-width: 35%;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  margin: 0 0 30px 50px;
`;

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 6px solid black;
  border-top: 6px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
`;
