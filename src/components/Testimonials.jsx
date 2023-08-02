const Testimonials = ({ img, testimonial, name, position }) => {
  return (
    <section className="px-[40px] flex flex-col items-center">
      <img
        src={img}
        alt="Profile Photo"
        className="rounded-full mx-auto w-[72px]"
      />
      <p className="my-[25px] font-bold  text-Dark-grayish-blue max-w-[400px]">
        {testimonial}
      </p>
      <h3 className="font-Fraunces text-[18px] my-[12px]">{name}</h3>
      <p className="text-Dark-grayish-blue font-medium text-[14px] mb-[60px]">
        {position}
      </p>
    </section>
  );
};

export default Testimonials;
