import styled from "styled-components";

export const Spinner = styled.div`
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  &::before {
    animation: 1s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: black;
    border-radius: 50%;
    content: "";
    height: 60px;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    width: 60px;
    will-change: transform;
    top: 50px;
  }
`;

export const Input = styled.input`
  &[type="file"] {
    display: none;
  }
`;
export const Label = styled.label`
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 15px;
  padding: 20px 0;
  height: 50px;
  width: 165px;
  cursor: pointer;
  background-color: black;
  color: white;
  /* margin: auto; */

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  position: relative;

  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 240px;

  h1 {
    padding-bottom: 30px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
