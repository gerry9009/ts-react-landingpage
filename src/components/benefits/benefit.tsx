import { SelectedPage } from "@/shared/types";
import LearnButton from "@/shared/LearnButton";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, text, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex flex-col items-center justify-center rounded border border-2 px-5 py-16 text-center md:h-96"
    >
      <div className="rounded-full border border-2 border-gray-100 bg-primary-100 p-3">
        {icon}
      </div>
      <h2 className="m-3 text-lg font-bold">{title}</h2>
      <p>{text}</p>
      <div className="py-5">
        <LearnButton setSelectedPage={setSelectedPage}>Learn More</LearnButton>
      </div>
    </motion.div>
  );
};

export default Benefit;
