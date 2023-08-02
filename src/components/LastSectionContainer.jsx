import LastSection from "./LastSection";
import LecheMobile from "/images/mobile/image-gallery-milkbottles.jpg";
import LecheDesktop from "/images/desktop/image-gallery-milkbottles.jpg";
import PlatoMobile from "/images/mobile/image-gallery-orange.jpg";
import PlatoDesktop from "/images/desktop/image-gallery-orange.jpg";
import QuesoMobile from "/images/mobile/image-gallery-sugar-cubes.jpg";
import QuesoDesktop from "/images/desktop/image-gallery-sugarcubes.jpg";
import ConoMobile from "/images/mobile/image-gallery-cone.jpg";
import ConoDesktop from "/images/desktop/image-gallery-cone.jpg";
const LastSectionContainer = () => {
  return (
    <section className="grid grid-cols-2  sm:flex ">
      <LastSection imgMobile={LecheMobile} imgDesktop={LecheDesktop} />
      <LastSection imgMobile={PlatoMobile} imgDesktop={PlatoDesktop} />

      <LastSection imgMobile={ConoMobile} imgDesktop={ConoDesktop} />
      <LastSection imgMobile={QuesoMobile} imgDesktop={QuesoDesktop} />
    </section>
  );
};

export default LastSectionContainer;
