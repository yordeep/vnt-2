import axios from "axios";
const ServerUrl = "http://localhost:3000";

const getData = async (url) => {
  try {
    var response = await axios.get(`${ServerUrl}/${url}`);

    var result = await response.data;

    return result;
  } catch (e) {
    return null;
  }
};
const postData = async (url, body) => {
  try {
    var response = await axios.post(`${ServerUrl}/${url}`, body);
    var result = await response.data;
    return result;
  } catch (e) {
    return null;
  }
};
export { ServerUrl, getData, postData };
