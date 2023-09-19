type Props = {
  title: string;
  text: string;
};

const Banner = ({ title, text }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="title" title={title}>
        {title}
      </h1>
      <p className="txt" title={text}>
        {text}
      </p>
    </div>
  );
};

export default Banner;
