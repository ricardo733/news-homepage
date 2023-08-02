import Testimonials from "./Testimonials";
import imgEmily from "/images/image-emily.jpg";
import imgThomas from "/images/image-thomas.jpg";
import imgJennie from "/images/image-jennie.jpg";

const TestimonialContainer = () => {
  return (
    <section className="text-center">
      <h2 className="text-[17px] my-[25px] font-Fraunces text-Dark-grayish-blue uppercase tracking-widest">
        Client testimonials
      </h2>
      <div className="lg:flex ">
        <Testimonials
          img={imgEmily}
          position="Marketing Director"
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
        />
        <Testimonials
          order="order-8"
          img={imgThomas}
          position="Chief Operating Officer"
          testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
        />
        <Testimonials
          img={imgJennie}
          position="Business Owner"
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
        />
      </div>
    </section>
  );
};

export default TestimonialContainer;
