import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { useCallback, useState } from "react";

export function Main(props) {
  const ITEMS = [
    {
      href: "https://nextjs.org/docs",
      title: "Documentation",
      description: "Find in-depth information about Next.js features and API.",
    },
    {
      href: "https://nextjs.org/learn",
      title: "Learn",
      description: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      href: "https://github.com/vercel/next.js/tree/master/examples",
      title: "Examples",
      description: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy",
      description:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  }, []);

  return (
    <main className={classes.main}>
      <Headline title={props.page} handleReduce={handleReduce}>
        {<code className={classes.code}>{items.length}</code>}
      </Headline>

      <Links items={items} />
    </main>
  );
}