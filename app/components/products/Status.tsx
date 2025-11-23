import { IconType } from "react-icons";



interface StatusProps {
  text: string;
  icon: IconType;
  bg: string;
  color: string;
}

//icon: Icon -> rename
const Status: React.FC<StatusProps> = ({ text, icon: Icon, bg, color }) => {
  return (
    <div className={`${bg} ${color} inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium`}>
      {text}
      <Icon size={15} />
    </div>
  );
};

export default Status;
