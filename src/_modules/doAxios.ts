import axios from "axios";

const doAxios = async options => {
  await axios({
    method: options.method,
    url: options.url,
    params: options.params || "",
    responseType: options.responseType || "json"
  }).catch(err => {
    console.error(err.response);
    return err.response;
  });
};

export default doAxios;
