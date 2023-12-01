import "tw-elements/dist/css/tw-elements.min.css";
import "@/styles/globals.css";
import "@/styles/customs.css";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalData from "@/lib/preBuildScripts/static/globalData.json"
import globalState from "@/lib/store/globalState";
import { useEffect } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      globalState.setState({
        showLazy: true,
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  return (
    <div className="text-dim-black">
      <GlobalContext.Provider value={{ ...globalData }}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </GlobalContext.Provider>
    </div>
  );
}
