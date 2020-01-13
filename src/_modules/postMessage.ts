import app from "./app";
import { ChatPostMessageArguments } from "@slack/web-api";

type Arg = ChatPostMessageArguments;

const postMessage = async ({ channel, text, blocks }: Arg) => {
  return await app.chat
    .postMessage({
      channel: channel,
      as_user: false,
      text: text || "",
      blocks: blocks
    })
    .catch(error => {
      console.log("=======");
      console.log(error);
      console.log("=======");
    });
};

export default postMessage;
