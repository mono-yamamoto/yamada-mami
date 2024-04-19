import TitleLv1 from "@/components/title/lower/TItleLv1";
import Image from "next/image";
import dummyImage from "./dummy.png";

const AppDay = () => {
  return (
    <div className="contents-inner">
      <TitleLv1 title="日々のこと"></TitleLv1>

      <div className="main-item">
        <Image src={dummyImage} alt="dummy" />
        <p className="time">2023年12月30日</p>
        <h2 className="main-title">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h2>
        <p className="main-text">物語は、大学生のトオルが高校時代の親友であるナオコと再会し、彼女との過去と向き合いながら青春時代を回想するという形式で進んでいく。ナオコはトオルが高校生の時に恋に落ちた女性であり、彼女の影響を受けながらも、トオルは心に傷を負いながらも成長していく...</p>
      </div>

      <ul className="list">{}</ul>
    </div>
  );
};
export default AppDay;
