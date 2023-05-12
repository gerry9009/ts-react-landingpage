import HTag from "@/shared/HTag";
import { SelectedPage, BenefitType } from "@/shared/types";
import Benefit from "./benefit";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import AbstractWaves from "@/assets/AbstractWaves.png";
import Sparkles from "@/assets/Sparkles.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni!",
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  const HeaderStyle = "md:my-5 md:w-3/5";
  const BenefitsStyle =
    "flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between ";

  const Header = () => {
    return (
      <>
        <HTag>More than just a gym.</HTag>
        <p className="my-5 text-sm">
          {" "}
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </>
    );
  };

  const DescriptionHeader = () => {
    return (
      <HTag>
        MILLIONS OF HAPPY MEMBERS GETTING{" "}
        <span className="text-primary-500">FIT</span>
      </HTag>
    );
  };

  const Description = () => {
    return (
      <>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          commodi alias facilis architecto tempora nulla voluptatibus cumque
          itaque soluta mollitia doloribus iste? Hic, vero distinctio temporibus
          dolorum, reiciendis perspiciatis voluptates doloremque laboriosam
          optio harum reprehenderit commodi. Reprehenderit, itaque rerum impedit
          saepe officiis nulla eum ducimus at expedita magni dolor eveniet. Quod
          beatae illum esse cum laudantium molestiae hic, omnis vero corporis
          placeat a modi animi quo cupiditate magnam similique ex, perferendis
          atque tenetur sint ducimus, delectus autem ad cumque! Et?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
          debitis neque natus illo, dignissimos adipisci dolorem odio quam unde
          quia praesentium eius quis. Cum, quibusdam alias esse deserunt quam,
          eveniet ipsum tenetur exercitationem dolorum optio molestias ab omnis
          asperiores quos corrupti ad fuga natus est tempora! Recusandae, earum
          repudiandae!
        </p>
      </>
    );
  };

  const DescriptionBtn = () => {
    return (
      <div className=" relative py-20">
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
        <img
          className="absolute bottom-0 right-20"
          src={Sparkles}
          alt="Sparkles"
        />
      </div>
    );
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      {/* SECTION HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={HeaderStyle}
        >
          <Header />
        </motion.div>
      </motion.div>

      {/* BENEFITS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className={BenefitsStyle}
      >
        {benefits.map((benefit: BenefitType) => {
          return (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              setSelectedPage={setSelectedPage}
            />
          );
        })}
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="my-20 items-center justify-between md:flex md:gap-10">
        <img
          src={BenefitsPageGraphic}
          alt="Benefits page"
          className="mx-auto"
        />

        {/* DESCRIPTION  */}
        <div className="relative">
          <img
            className="absolute -left-10 -top-20 md:-left-20"
            src={AbstractWaves}
            alt="Abstract Waves"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {<DescriptionHeader />}
          </motion.div>
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
            {<Description />}
          </motion.div>
          {<DescriptionBtn />}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
