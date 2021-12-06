import axios from "axios";

export default axios.create({
  baseURL: "http://api.football-data.org/v2",
});
