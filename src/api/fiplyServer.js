import axios from "axios";

// export default axios.create({
//     baseURL: "http://192.168.1.4:80/api"
// });

axios.defaults.baseURL = "http://192.168.1.4:80/api"
// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;