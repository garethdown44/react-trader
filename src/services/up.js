import urls from "./urls"
import axios from "axios";

export default () => {
  return axios.get(urls.up());
}