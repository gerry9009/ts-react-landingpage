import HTag from "@/shared/HTag";
import { ClassesType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const images: Array<ClassesType> = [
  {
    image: image1,
    name: "Weight Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga sed voluptates dignissimos debitis ratione mollitia architecto, commodi id. Ratione.",
  },
  {
    image: image2,
    name: "Yoga Classes",
  },
  {
    image: image3,
    name: "Ab Core Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga sed voluptates dignissimos debitis ratione mollitia architecto, commodi id. Ratione.",
  },
  {
    image: image4,
    name: "Adventure Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga sed voluptates dignissimos debitis ratione mollitia architecto, commodi id. Ratione.",
  },
  {
    image: image5,
    name: "Fitness Classes",
  },
  {
    image: image6,
    name: "Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga sed voluptates dignissimos debitis ratione mollitia architecto, commodi id. Ratione.",
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-4/5 pb-20 md:w-7/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: +50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HTag>Our Classes</HTag>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            asperiores perspiciatis corporis numquam dolore. Voluptatum totam
            nihil numquam expedita inventore, ullam modi unde officia quia, ipsa
            sed fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi, quia.
          </p>
        </motion.div>
        <div className="overflow-x-auto overflow-y-hidden pl-5 md:pl-10">
          <ul className="flex  h-[50vh] w-[3900px] gap-10">
            {images.map((image) => {
              return (
                <Class
                  image={image.image}
                  name={image.name}
                  description={image.description}
                  key={image.name}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
