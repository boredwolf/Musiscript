import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import Home from "./Home";
import Connexion from "./Connexion";
import Location from "./Location";
import Formules from "./Formules";

const Scroll = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Location />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Formules />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      
    </div>
  );
};

export default Scroll;
