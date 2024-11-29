import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    const htmlElement = window.document.documentElement;


    if (colorMode === "dark") {
      bodyClass.add(className);
      htmlElement.style.backgroundColor = "#1a222c";
    } else {
      bodyClass.remove(className);
      htmlElement.style.backgroundColor = "";
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
