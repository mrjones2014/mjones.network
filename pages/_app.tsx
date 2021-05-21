// global styles shared across the entire site
import * as Fathom from "fathom-client";
// used for collection views selector (optional)
// TODO: re-add if we enable collection view dropdowns
// import 'rc-dropdown/assets/index.css'
// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import { fathomConfig, fathomId } from "lib/config";
import { useRouter } from "next/router";
// here we're bringing in any languages we want to support for
// syntax highlighting via Notion's Code block
import "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.css";
import React from "react";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// core styles for static tweet renderer (optional)
import "react-static-tweets/styles.css";
import "styles/global.css";
// global style overrides for notion
import "styles/notion.css";
// global style overrides for prism theme (optional)
import "styles/prism-theme.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    if (fathomId) {
      Fathom.load(fathomId, fathomConfig);

      function onRouteChangeComplete() {
        Fathom.trackPageview();
      }

      router.events.on("routeChangeComplete", onRouteChangeComplete);

      return () => {
        router.events.off("routeChangeComplete", onRouteChangeComplete);
      };
    }
  }, []);

  return <Component {...pageProps} />;
}
