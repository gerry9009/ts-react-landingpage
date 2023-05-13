import HTag from "@/shared/HTag";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const inputStyle =
  "w-full bg-primary-300 placeholder-white placeholder:uppercase px-5 py-3 mb-5 rounded-lg";

const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const Header = () => {
    return (
      <>
        <HTag>
          <span className="text-primary-500">Join now</span> to get in shape
        </HTag>
        <p className="py-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          doloribus voluptatum porro! Temporibus ipsam totam impedit magni,
          earum asperiores! Dignissimos repellendus facere perspiciatis velit
          quaerat!
        </p>
      </>
    );
  };

  const Form = () => {
    return (
      <>
        {errors.name && (
          <p className="my-1 text-primary-500">
            {errors.name.type === "required" && "This field is required"}
            {errors.name.type === "maxLength" && "Max length is 100 char"}
          </p>
        )}
        <input
          className={inputStyle}
          type="text"
          id="text"
          placeholder="name"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />

        {errors.email && (
          <p className="my-1 text-primary-500">
            {errors.email.type === "required" && "This field is required"}
            {errors.email.type === "pattern" && "Invalid email address"}
          </p>
        )}
        <input
          type="email"
          id="email"
          placeholder="email"
          className={inputStyle}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />

        {errors.message && (
          <p className="my-1 text-primary-500">
            {errors.message.type === "required" && "This field is required"}
            {errors.message.type === "maxLength" && "Max length is 100 char"}
          </p>
        )}
        <textarea
          id="message"
          placeholder="message"
          className={inputStyle}
          cols={50}
          rows={4}
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        ></textarea>

        <button
          type="submit"
          className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white "
        >
          Submit
        </button>
      </>
    );
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 py-24 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="items-end justify-around gap-10 md:flex"
      >
        <motion.div
          className="md:w-10/12 md:max-w-[800px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Header />
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/c6957720631824b8fbcbf203672d2330"
            method="POST"
          >
            <Form />
          </form>
        </motion.div>

        <motion.div
          className="my-20 w-full  md:my-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={ContactUsPageGraphic}
            alt="Contact us image"
            className="mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
