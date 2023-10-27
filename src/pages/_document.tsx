import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="home">
        <Main />
        <NextScript />
        <script  async src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
