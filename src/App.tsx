import React, { useEffect, useState } from "react";
import is from "is_js";
import Main from "./Main";
import WebRoot from "./web/Root";
import ZaloRoot from "./zalo/Root"  

const App = () => {
  const [platform, setPlatform] = useState("zalo");
  const HTMLClassList = document.getElementsByTagName("html")[0].classList;

  useEffect(() => {
    const checkPlatform = async () => {
      const port = await location.port; // zmp start chạy trên port 3000 -> zaloweb: 2999
      const isZalo = (await navigator.userAgent.indexOf("Zalo")) !== -1; // chạy trên thiết bị thật
      if (!isZalo && port !== "2999") {
        // phát triển web
        setPlatform("web")
      }
    };

    checkPlatform();
  }, []);

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add("windows");
    }
    if (is.chrome()) {
      HTMLClassList.add("chrome");
    }
    if (is.firefox()) {
      HTMLClassList.add("firefox");
    }
    if (is.safari()) {
      HTMLClassList.add("safari");
    }
  }, [HTMLClassList]);

  /* useEffect(() => {
    if (navbarPosition === 'double-top') {
      HTMLClassList.add('double-top-nav-layout');
    }
    return () => HTMLClassList.remove('double-top-nav-layout');
  }, [navbarPosition]); */

  return (
      <Main>
        {platform === "zalo" ? <ZaloRoot /> : <WebRoot />}
      </Main>
  );
};

export default App;
