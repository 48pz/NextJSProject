interface HeadingProps {
  title: string;
  center?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, center, className }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className={`font-bold text-2xl ${className ?? ""}`}>{title}</h1>
    </div>
  );
};

export default Heading;
