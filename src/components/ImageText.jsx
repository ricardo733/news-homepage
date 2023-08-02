const ImageText = ({ imgDesktop, imgMobile, text, title, order }) => {
  return (
    <div className={`${order} relative desktop:mb-[40px] desktop:mt-[60px]`}>
      <picture className="">
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="image-services" />
      </picture>
      <h2 className="absolute  mt-[-220px] left-0 right-0 text-center font-Fraunces text-[27px] text-Dark-desaturated-cyan tablet:mt-[-140px]">
        {title}
      </h2>
      <p className="absolute mt-[-120px] text-center font-bold text-Dark-desaturated-cyan px-[15px] tablet:text-[12px] tablet:mt-[-90px]">
        {text}
      </p>
    </div>
  );
};

export default ImageText;
