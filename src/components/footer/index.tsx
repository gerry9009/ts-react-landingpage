import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 ">
      <div className="mx-auto w-4/5 items-start justify-between gap-x-10 py-2 md:flex md:py-10">
        <div className="mb-10 mt-3  md:w-7/12">
          <img src={Logo} alt="logo" className="mb-5" />
          <p className=" mb-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            repellendus velit sapiente, amet dolorem tempore similique officiis
            vero explicabo ex veritatis modi quidem quasi iure fugit doloremque
            enim eveniet exercitationem.
          </p>
          <p className="text-sm">© Evogym All Rights Reserved.</p>
        </div>

        <div className="flex justify-between gap-7">
          <div>
            <h4 className="mb-3 font-bold">Links</h4>
            <ul className="flex flex-col gap-y-2 text-sm md:gap-y-5">
              <li>sequi aspernatur quas illo</li>
              <li>it amet consectetur adipisicing</li>
              <li>Sit assumenda totam rerum possimus</li>
            </ul>
          </div>
          <div>
            <h4 className="pb-3 font-bold">Contact Us</h4>
            <ul className="flex flex-col gap-y-2 text-sm md:gap-y-5">
              <li>Elit sit assumenda totam rerum</li>
              <li>+36-1-123-4567</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
