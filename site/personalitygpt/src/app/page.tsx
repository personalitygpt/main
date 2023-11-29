import Head from "next/head";
import styles from ".../styles/Home.modules.css";
import {
  Aftertestmsg,
  Anallyze8,
  Brololmsg,
  Bromeaningmsg,
  Communiate9,
  Component82,
  Hellograymsg1,
  History7,
  Learningthemeaningofdifferentphrases,
  LearnTheMeaningOfPhrasesRectangle,
  MoreThan,
  Phrases9,
  Rectangle1,
  Rectangle62,
} from "../ui-components";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Figma-to-code</title>
      </Head>
      <Aftertestmsg />
      <Anallyze8 />
      <Brololmsg />
      <Bromeaningmsg />
      <Communiate9 />
      <Component82 />
      <Hellograymsg1 />
      <History7 />
      <Learningthemeaningofdifferentphrases />
      <LearnTheMeaningOfPhrasesRectangle />
      <MoreThan />
      <Phrases9 />
      <Rectangle1 />
      <Rectangle62 />
    </div>
  );
}