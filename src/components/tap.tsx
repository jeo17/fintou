interface TapProps {
  title: string;
}

const tap: React.FC<TapProps> = (props) => {
  return (
    <div
      className={`w-full absolute top-0 text-white text-[20px] sm:px-[90px] px-[40px] py-[20px] bg-gradient-black-opacity`}
    >
      {props.title}
    </div>
  );
};

export default tap;
