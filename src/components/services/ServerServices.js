import axios from "axios";

const getData = async (url) => {
  try {
    var response = await axios.get(`api/v1/${url}`);

    var result = await response.data;

    return result;
  } catch (e) {
    return null;
  }
};
const postData = async (url, body) => {
  try {
    var response = await axios.post(`api/v1/${url}`, body);
    var result = await response.data;
    return result;
  } catch (e) {
    return null;
  }
};
export { getData, postData };
