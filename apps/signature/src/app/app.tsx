import axios from "axios";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Provider } from "react-redux";
import store from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "store/store";
import { ContextStoreContextProvider } from "store/ContextStore/ContextStoreContextProvider";
import { LayoutContainer } from "./layouts";
import { SignatureAppContextProvider } from "./store/SignatureAppContext/SignatureAppContextProvider";

axios.defaults.baseURL = process.env.NX_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return <>Signature</>;
}

export default App;
