import ImageSlider, { Slide } from "react-auto-image-slider";
export default function Caro() {
  return (
    <div className="w-full items-center flex">
    <ImageSlider  effectDelay={200} autoPlayDelay={2500}>
      <Slide>
        <img alt="img2" src="https://images.squarespace-cdn.com/content/v1/5a132025be42d634395e16f2/1602132207761-M90SE3G7HUU3LU5YOSK0/Laptop+Repair.jpg?format=1500w" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://images.squarespace-cdn.com/content/v1/5a132025be42d634395e16f2/1602132207761-M90SE3G7HUU3LU5YOSK0/Laptop+Repair.jpg?format=1500w" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://images.squarespace-cdn.com/content/v1/5a132025be42d634395e16f2/1602132207761-M90SE3G7HUU3LU5YOSK0/Laptop+Repair.jpg?format=1500w" />
      </Slide>
    </ImageSlider>
  
</div>

    );
}