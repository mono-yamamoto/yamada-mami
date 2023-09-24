import style from "./index.module.css";

interface Props {
  title: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const TitleLv1 = ({ title, tag = "h1" }: Props) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={style.lv1}>{title}</Tag>;
};
export default TitleLv1;
