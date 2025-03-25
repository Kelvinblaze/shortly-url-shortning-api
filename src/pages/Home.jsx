import { useState } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import Shortener from "../components/Shortener";

// Images
import IllustrationWorking from "../assets/images/illustration-working.svg";
import BackgroundBoostDesktopImage from "../assets/images/bg-boost-desktop.svg";

// Icons
import BrandRecognitionIcon from "../assets/images/icon-brand-recognition.svg";
import DigitalRecordsIcon from "../assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../assets/images/icon-fully-customizable.svg";

const Home = () => {
  const [showResultContainerSpacing, setShowResultContainerSpacing] =
    useState(false);

  const features = [
    {
      icon: BrandRecognitionIcon,
      title: "Brand Recognition",
      description:
        "  Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: DigitalRecordsIcon,
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: FullyCustomizableIcon,
      title: " Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="">
        <section className="py-16 bg-white pb-32">
          <div className="alignment">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center lg:text-left text-center">
              <div className="space-y-8 lg:order-first order-last">
                <div className="space-y-3 lg:w-[90%] w-[80%] lg:mx-0 mx-auto">
                  <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-neutral-very-dark-blue">
                    More than just shorter links
                  </h2>
                  <p className="font-medium text-neutral-grayish-violet ">
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                  </p>
                </div>

                <button className="primary-btn">Get Started</button>
              </div>

              <div className="relative lg:order-last order-first">
                <img
                  src={IllustrationWorking}
                  alt="illustration-working"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0F0F5]  py-16 relative">
          {/* Shortener floating */}
          <section className="absolute w-full left-0 top-0 -mt-20">
            <div className="alignment">
              <Shortener
                onToggleResultContainerSpacing={setShowResultContainerSpacing}
              />
            </div>
          </section>

          {showResultContainerSpacing && (
            <div className="lg:h-[100px] h-[200px]"></div>
          )}
          <div className="alignment space-y-10 pt-20">
            <div className="text-center space-y-3 lg:w-[50%] w-[80%]  mx-auto">
              <h3 className=" font-bold text-neutral-very-dark-blue lg:text-3xl md:text-2xl sm:text-xl text-xl ">
                Advanced Statistics
              </h3>
              <p className="font-medium text-neutral-grayish-violet">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {features.map((feature, idx) => {
                return (
                  <FeatureCard
                    key={idx}
                    feature={feature}
                    heightFromOther={`${idx * 40}px`}
                    isLast={idx === features.length - 1}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url("${BackgroundBoostDesktopImage}")`,
          }}
          className="bg-primary-dark-violet py-16"
        >
          <div className="alignment">
            <div className="text-center space-y-5 lg:w-[50%] w-[80%]  mx-auto">
              <h3 className=" font-bold text-white lg:text-3xl md:text-2xl sm:text-xl text-xl ">
                Boost your links today
              </h3>
              <button className="primary-btn">Get Started</button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
