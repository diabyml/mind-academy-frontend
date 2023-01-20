import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <script>
            document.getElementsByTagName`html`)[0].className += `js`;
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://unpkg.com/codyhouse-framework/main/assets/js/util.js"
            defer
          ></script>
        </body>
      </Html>
    );
  }
}
