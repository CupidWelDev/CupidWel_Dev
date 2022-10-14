import Head from "next/head";

interface ITitle {
  [key: string]: string;
}

export default function SEO({ title }: ITitle): JSX.Element {
  return (
    <Head>
      <title>{title} | CupidWel</title>
    </Head>
  );
}
