import axios from "axios";

axios.defaults.baseURL = process.env.NX_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return <>Main</>;
}

export default App;
