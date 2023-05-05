import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // Functionality
  const handleClick = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };

  // components style
  const homeStyle = "py-20 md:h-full md:pb-0 bg-gray-20";
  const homeWrapperStyle =
    "mx-auto w-5/6 md:h-5/6 flex flex-col items-center md:flex-row space-around";

  const mainHeaderStyle = "flex flex-col p-4 md:p-0 md:relative z-10 ";
  const mainHeaderWrapperStyle = "md:w-2/3";
  const mainHeaderImageStyle =
    "w-1/3 mb-8 w-[100%] md:before:absolute md:before:content-evolvetext md:before:-top-20 md:before:-left-20 before:z-[-1]";
  const btnsContainerStyle =
    "flex items-center justify-between mt-4 w-2/3 mt-16 max-w-[270px]";
  const moreBtnStyle =
    "underline font-bold text-primary-500 text-sm hover:text-secondary-500 cursor-pointer";
  const imageWrapperStye = "flex justify-center";
  const sponsorsStyle = "h-1/6 bg-primary-100 px-10";
  const sponsorsWrapper =
    "w-3/5 flex items-center justify-between h-full mx-auto";
  // Components
  const Buttons = () => {
    return (
      <div className={btnsContainerStyle}>
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
        <AnchorLink
          className={moreBtnStyle}
          onClick={handleClick}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </div>
    );
  };

  const MainHeader = () => {
    return (
      <motion.div className={mainHeaderStyle}>
        <div className={mainHeaderWrapperStyle}>
          <div className={mainHeaderImageStyle}>
            <img src={HomePageText} alt="Home text" />
          </div>
          <p>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
          {<Buttons />}
        </div>
      </motion.div>
    );
  };

  const ImageHeader = () => {
    return (
      <motion.div className={imageWrapperStye}>
        <img src={HomePageGraphic} alt="Home page graphic" />
      </motion.div>
    );
  };

  const Sponsors = () => {
    return (
      <div className={sponsorsStyle}>
        <div className={sponsorsWrapper}>
          <img alt="redbull-sponsor" src={SponsorRedBull} />
          <img alt="forbes-sponsor" src={SponsorForbes} />
          <img alt="fortune-sponsor" src={SponsorFortune} />
        </div>
      </div>
    );
  };

  return (
    <section id="home" className={homeStyle}>
      <div className={homeWrapperStyle}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {<MainHeader />}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: +50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {<ImageHeader />}
        </motion.div>
      </div>
      {isAboveMediumScreens && <Sponsors />}
    </section>
  );
};

export default Home;
