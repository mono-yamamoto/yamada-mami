import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { client } from "../../libs/client";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface props {
  mami: any;
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "mami" });
  return {
    props: {
      mami: data.contents,
    },
  };
};

export default function Home({ mami }: props) {
  return (
    <div className={styles.container}>
      <ul>
        {mami.map((mami: any) => (
          <li key={mami.id}>
            <Link href={`mami/${mami.id}`}>{mami.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
