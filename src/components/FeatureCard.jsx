import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ feature, heightFromOther, isLast }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint (1024px)
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start w-full ">
      {/* Veritical Stepper Line */}
      {!isLast && (
        <div className="absolute top-full left-1/2 lg:left-[35px] w-[5px] lg:w-[5px] bg-primary-cyan h-full lg:h-[60px]  transform -translate-x-1/2 lg:translate-x-0 lg:hidden"></div>
      )}

      {/* Horizontal Stepper Line */}
      {!isLast && (
        <div className="bg-primary-cyan hidden lg:block absolute top-1/2 left-full w-[60px] h-[5px] transform -translate-y-1/2"></div>
      )}

      {/* Main Feature Card */}
      <div
        className="relative h-max w-full bg-white rounded-md shadow-sm p-5 lg:p-10 lg:min-h-[200px]  flex flex-col justify-between mt-10"
        style={{
          marginTop: isLargeScreen ? heightFromOther : undefined,
        }}
      >
        <div className="size-[60px] md:size-[70px] rounded-full bg-primary-dark-violet absolute  -top-8  left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-10 grid place-content-center">
          <div className="size-[30px] ">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-3 py-10 text-center md:text-left">
          <h5 className="text-lg md:text-xl font-bold">{feature.title}</h5>
          <p className="text-neutral-grayish-violet text-sm md:text-base font-medium">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  heightFromOther: PropTypes.string,
  isLast: PropTypes.bool,
};

export default FeatureCard;
