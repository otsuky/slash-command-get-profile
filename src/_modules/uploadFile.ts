import doAxios from "./doAxios";

const FILE_UPLOAD_API = "https://slack.com/api/files.upload";

const uploadFile = async options => {
  const res = await doAxios({
    method: "post",
    url: FILE_UPLOAD_API,
    params: {
      token: "",
      channels: options.channel,
      filename: options.filename,
      file: options.file,
      title: options.title,
      initial_comment: options.initial_comment || ""
    }
  });
  console.log(res);
};

export default uploadFile;
