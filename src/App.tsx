import React, { Suspense, useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import is from "is_js";
import Main from "./Main";

const WebRoot = React.lazy(() => import("./web/Root"));
const ZaloRoot = React.lazy(() => import("./zalo/Root"));

const LoadingComponent = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(204,204,204,0.4)',
      }}
    >
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <Spinner animation="grow" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

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
    <Suspense fallback={<LoadingComponent />}>
      <Main>
        {platform === "zalo" ? <ZaloRoot /> : <WebRoot />}
      </Main>
    </Suspense>
  );
};

export default App;
