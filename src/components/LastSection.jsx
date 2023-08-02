const LastSection = ({ order, imgMobile, imgDesktop }) => {
  return (
    <section className={`${order} `}>
      <picture>
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="" />
      </picture>
    </section>
  );
};

export default LastSection;
