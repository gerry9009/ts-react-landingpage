type Props = {
  image: string;
  name: string;
  description?: string;
};

const overlayStlye =
  "absolute flex flex-col items-center justify-center px-20 bottom-0 left-0 right-0 top-0 z-20 bg-primary-500 text-white opacity-0 transition-all duration-300 ease-in hover:opacity-90";

const Class = ({ image, name, description }: Props) => {
  return (
    <li className="relative  bg-slate-100">
      <img src={image} alt={`${image}`} />
      <div className={overlayStlye}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
    </li>
  );
};

export default Class;
