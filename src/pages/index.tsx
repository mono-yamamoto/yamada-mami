import { Inter } from "next/font/google";
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
    <div>
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
