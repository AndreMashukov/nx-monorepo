import axios from "axios";

axios.defaults.baseURL = process.env.NX_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return <>Main App 995</>;
}

export default App;
