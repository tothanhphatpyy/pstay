import React, { Suspense, useEffect, useRef } from "react";
import is from "is_js";
// import WebRoot from "./web/Root";
// import { CloseButton } from 'components/common/Toast';
// import SettingsToggle from 'components/settings-panel/SettingsToggle';
// import SettingsPanel from 'components/settings-panel/SettingsPanel';
<<<<<<< Updated upstream
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { RecoilRoot } from 'recoil';
import Main from './Main';
=======

import Main from "./Main";
import { Spinner } from "react-bootstrap";

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
>>>>>>> Stashed changes

const App = () => {
  const HTMLClassList = document.getElementsByTagName("html")[0].classList;

  const platformIsZalo = useRef(false);
  useEffect(() => {
    const checkZaloPlatform = async () => {
      const port = await location.port; // zmp start chạy trên port 3000 -> zaloweb: 2999
      const isZalo = (await navigator.userAgent.indexOf("Zalo")) !== -1; // chạy trên thiết bị thật
      if (isZalo || port == "2999") {
        // phát triển zalo mini app
        platformIsZalo.current = true;
      }
    };

    checkZaloPlatform();
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
<<<<<<< Updated upstream


=======
  // const { isLoaded } = useToggleStyle(false, false, null);

  // console.log(isLoaded);
>>>>>>> Stashed changes
  /* useEffect(() => {
    if (navbarPosition === 'double-top') {
      HTMLClassList.add('double-top-nav-layout');
    }
    return () => HTMLClassList.remove('double-top-nav-layout');
  }, [navbarPosition]); */

  return (
<<<<<<< Updated upstream
    <RecoilRoot>
    <Main>
    <Router basename={process.env.NODE_ENV === "production" ? `/zapps/${window.APP_ID}` : ""}>
      <DigiBirdRoutes />
      {/* <SettingsToggle />
      <SettingsPanel />
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.BOTTOM_LEFT}
      /> */}
    </Router>
    </Main>
    </RecoilRoot>
=======
    <Suspense fallback={<LoadingComponent />}>
      <Main>
        {platformIsZalo ? <ZaloRoot /> : <WebRoot />}
        {/* <ZaloRoot />  */}
      </Main>
    </Suspense>
>>>>>>> Stashed changes
  );
};

export default App;
