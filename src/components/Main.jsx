import imgMobile from "/images/mobile/image-header.jpg";
import imgDesktop from "/images/desktop/image-header.jpg";
import imgArrow from "/images/icon-arrow-down.svg";

const Main = () => {
  return (
    <section className="">
      <picture>
        <source media="(max-width: 639px)" srcSet={imgMobile} />
        <source media="(min-width: 640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="background image header" />
      </picture>
      <p className="top-[134px] left-0 right-0 mx-auto  text-white text-[40px] tracking-normal font-Fraunces text-center absolute uppercase w-[327px] sm:w-[500px] sm:top-[114px] md:top-[130px] lg:tracking-widest desktop:text-[60px] desktop:mt-[60px] desktop:w-[900px] ">
        We are creatives
      </p>
      <img
        src={imgArrow}
        alt="Arrow Image"
        className=" absolute top-[290px] left-0 right-0 mx-auto sm:top-[220px] md:top-[200px] lg:top-[230px] desktop:mt-[130px]"
      />
    </section>
  );
};

export default Main;
