import { TextLimit } from "../TextLimit/TextLimit";
import { 
  CardBody, 
  CardContainer, 
  CardFooter, 
  CardHeader, 
  ImageWrapper 
} from "./CardStyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={(props.top ? 250 : 100)} />
          </CardHeader>

          <CardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </section>

            <section>
              <i className="bi bi-chat"></i>
              <span>{props.comments?.length}</span>
            </section>
          </CardFooter>
        </div>

        <ImageWrapper top={props.top}>
          <img src={props.banner} alt="Imagem" />
        </ImageWrapper>
      </CardBody>
    </CardContainer>
  );
}
