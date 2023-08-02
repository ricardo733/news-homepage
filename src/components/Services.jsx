import Image from "./Image";
import Text from "./Text";

import imgTransMobile from "/images/mobile/image-transform.jpg";
import imgTransDesktop from "/images/desktop/image-transform.jpg";
import imgCupMobile from "/images/mobile/image-stand-out.jpg";
import imgCupDesktop from "/images/desktop/image-stand-out.jpg";

const Services = () => {
  return (
    <section className="tablet:grid grid-cols-2 tablet:h-[585px]">
      <Image
        order="order-2"
        imgMobile={imgTransMobile}
        imgDesktop={imgTransDesktop}
      />

      <Text
        order="order-1"
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast.
              Engage your clients through compelling visuals that do most of the marketing for you."
        color="bg-Yellow"
      />

      <Image
        order="order-3"
        imgMobile={imgCupMobile}
        imgDesktop={imgCupDesktop}
      />

      <Text
        order="order-4"
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
            "
        color="bg-Soft-red"
      />
    </section>
  );
};

export default Services;
