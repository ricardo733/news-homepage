import ImageText from "./ImageText";
import imgAppleMobile from "/images/mobile/image-graphic-design.jpg";
import imgAppleDesktop from "/images/desktop/image-graphic-design.jpg";
import imgOrangeMobile from "/images/mobile/image-photography.jpg";
import imgOrangeDesktop from "/images/desktop/image-photography.jpg";

const ImageTextContainer = () => {
  return (
    <div className="tablet:flex  md:mt-[50px] lg:flex lg:mt-[250px] xl:mt-[480px]">
      <ImageText
        order="order-5"
        imgMobile={imgAppleMobile}
        imgDesktop={imgAppleDesktop}
        title="Graphic Design "
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <ImageText
        order="orde-6"
        imgMobile={imgOrangeMobile}
        imgDesktop={imgOrangeDesktop}
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image"
      />
    </div>
  );
};

export default ImageTextContainer;
