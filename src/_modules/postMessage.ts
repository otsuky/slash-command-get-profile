import app from './app'

const postMessage = async options => {
  return await app.chat.postMessage({
    channel: options.channel,
    text: options.text || '',
    blocks: options.blocks,
  }).catch(error => {
    console.log(error);
  });
}

export default postMessage;
