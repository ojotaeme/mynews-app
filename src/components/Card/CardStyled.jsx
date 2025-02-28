import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
`;

export const CardBody = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: justify;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 60%; /* Ajustado para complementar os 40% da imagem */
  }
`;

export const ImageWrapper = styled.section`
  width: 40%;
  height: ${(props) => (props.top ? "400px" : "200px")};
  border-radius: 0 0.3rem 0.3rem 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${(props) => (props.top ? "1.5rem" : "1rem")};

  h2 {
    margin-bottom: 1rem;
    font-size: ${(props) => (props.top ? "3rem" : "1.5rem")};
    width: 100%;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;
