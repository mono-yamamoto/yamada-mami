import Image from "next/image";
import style from "./index.module.css";

interface Props {
  data: any;
}

const listItem = ({ data }: Props) => {
  return (
    <li className="item">
      <Image src={data.img} alt={data.alt} />
      <p className="time">{data.time}</p>
      <p className="text">{data.text}</p>
    </li>
  );
};
export default listItem;
