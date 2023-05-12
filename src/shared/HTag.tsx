type Props = {
  children: React.ReactNode;
};

const HTag = ({ children }: Props) => {
  return (
    <h2 className=" font-montserrat text-3xl font-bold uppercase">
      {children}
    </h2>
  );
};

export default HTag;
