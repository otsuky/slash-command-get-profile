import doAxios from './doAxios';

const FILE_UPLOAD_API = 'https://slack.com/api/files.upload';

const uploadFile = async (options) => {
  const res = await doAxios({
    method: 'post',
    url: FILE_UPLOAD_API,
    params: {
      token: 'xoxp-7819706576-116411365713-676907729122-23ded5d1737b0a6c32926a166bea41a2',
      channels: options.channel,
      filename: options.filename,
      file: options.file,
      title: options.title,
      initial_comment: options.initial_comment || '',
    },
  });
  console.log(res);
}

export default uploadFile;
