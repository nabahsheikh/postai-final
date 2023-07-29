import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BarLoader } from "react-spinners";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import CreateStore from "./store";
import DataHandler from "./services/DataHandler";
import PageRoutes from "./routes/index";
import reducers from "./redux/slicers";
import { Colors } from "./theme";
import AOS from "aos";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const [persistor, setPersistor] = useState(null);
  const [store, setStore] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // const loadingCompleted = () => {
  // };
  useEffect(() => {
    const storeConfig = CreateStore(reducers, () => {
      DataHandler.setStore(storeConfig);
      setStore(storeConfig);
      setPersistor(persistStore(storeConfig));
      setLoading(false);
    });
    // INIT ANIMATE ON SCROLL
    // AOS.init({
    //   disable: "mobile",
    // });
    AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <BarLoader size={150} color={Colors.theme} />
        </div>
      ) : (
        <Provider store={store}>
          <PersistGate
            loading={
              <div className="loader-wrapper">
                <BarLoader size={150} color={Colors.theme} />
              </div>
            }
            persistor={persistor}
          >
            <Router>
              <ToastContainer />
              <PageRoutes />
            </Router>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

export default App;
