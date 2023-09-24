import { client } from "../../../libs/client";
import styles from "./Home.module.scss";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "mami", contentId: id });

  return {
    props: {
      mami: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "mami" });

  const paths = data.contents.map((content: any) => `/mami/${content.id}`);
  return { paths, fallback: false };
};

export default function MamiId({ mami }: any) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{mami.title}</h1>
      <p className={styles.publishedAt}>{mami.publishedAt}</p>
      <div className={styles.post} dangerouslySetInnerHTML={{ __html: `${mami.body}` }}></div>
    </main>
  );
}
