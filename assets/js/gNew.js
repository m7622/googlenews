import axios from 'axios';
const apiKey = "0f3eb363d3b349fcaf1efbbc114f6cdb";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});