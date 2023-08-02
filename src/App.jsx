import "./App.css";
import Header from "./components/Header";
import LastSectionContainer from "./components/LastSectionContainer";
import Main from "./components/Main";
import Services from "./components/Services";
import TestimonialContainer from "./components/testimonialContainer";
import Footer from "./components/Footer";
import ImageTextContainer from "./components/ImageTextContainer";
function App() {
  return (
    <main className="">
      <Header />
      <Main />
      <Services />
      <ImageTextContainer />
      <TestimonialContainer />
      <LastSectionContainer />
      <Footer />
    </main>
  );
}

export default App;
