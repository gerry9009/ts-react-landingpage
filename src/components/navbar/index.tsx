import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link.tsx";
import { SelectedPage } from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // styles
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const flexBetweenStyle = "flex items-center justify-between";
  const navWrapperStyle = "fixed top-0 z-30 w-full py-6";
  const containerStyle = "mx-auto w-5/6";
  const leftSideStyle = "w-full gap-6";
  const rightSideStyle = "w-full";
  const itemsBigStyle = "gap-8 text-sm";
  const hamburgerMenuStyle = "rounded-full bg-secondary-500 p-2";
  const barsStyle = "h-6 w-6 text-white";
  const modalMenuStyle =
    "fixed right-0 bottom-0 top-0 w-1/2 bg-primary-100 z-50 drop-shadow-xl";
  const modalBtnContainer = "flex justify-end p-12";
  const xmarkStyle = "h-6 w-6 text-gray-400 hover:text-gray-500 duration-500";
  const itemsModalStyle = "ml-[33%] flex flex-col gap-10 text-2xl";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // functionality
  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  // elements

  const Menu = () => {
    // toggle classes depends on isAboveMediumScreens
    const bigScreen = `${flexBetweenStyle} ${itemsBigStyle}`;
    const smallScreen = itemsModalStyle;

    return (
      <div className={isAboveMediumScreens ? bigScreen : smallScreen}>
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Benefits"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Our Classes"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    );
  };

  const BigScreenMenu = () => {
    return (
      <div className={`${flexBetweenStyle} ${rightSideStyle}`}>
        {<Menu />}
        <div className={`${flexBetweenStyle} ${itemsBigStyle}`}>
          <p>Sign In</p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Become a Member
          </ActionButton>
        </div>
      </div>
    );
  };

  const SmallScreenMenu = () => {
    return (
      <button className={hamburgerMenuStyle} onClick={toggleMenu}>
        <Bars3Icon className={barsStyle} />
      </button>
    );
  };

  const MobileMenuModal = () => {
    return (
      <div className={modalMenuStyle}>
        <div className={modalBtnContainer}>
          <button onClick={toggleMenu}>
            <XMarkIcon className={xmarkStyle} />
          </button>
        </div>
        {<Menu />}
      </div>
    );
  };

  return (
    <nav>
      <div
        className={`${flexBetweenStyle} ${navWrapperStyle} ${navbarBackground}`}
      >
        <div className={`${flexBetweenStyle} ${containerStyle}`}>
          <div className={`${flexBetweenStyle} ${leftSideStyle}`}>
            <img src={Logo} alt="Logo" />
            {isAboveMediumScreens ? <BigScreenMenu /> : <SmallScreenMenu />}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && <MobileMenuModal />}
    </nav>
  );
};

export default Navbar;
