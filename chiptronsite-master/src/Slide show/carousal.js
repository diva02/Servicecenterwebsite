import ImageSlider, { Slide } from "react-auto-image-slider";
export default function Caro() {
  return (
    <div className="w-full  items-center flex">
    <ImageSlider  effectDelay={200} autoPlayDelay={2500}>
      <Slide>
        <img alt="img2" className="sm:w-full" src="http://www.chiptronix.in/img/desktop.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="http://www.chiptronix.in/img/chipp.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="http://www.chiptronix.in/img/eee.png" />
      </Slide>
      <Slide>
        <img alt="img2" src="http://www.chiptronix.in/img/laptop.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="http://www.chiptronix.in/img/start.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="http://www.chiptronix.in/img/topservice.png" />
      </Slide>
    </ImageSlider>
  
</div>

    );
}