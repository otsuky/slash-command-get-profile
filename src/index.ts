import qs from "querystring";
import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";
import { WebAPICallResult } from "@slack/web-api";
import getUsersProfile from "./_modules/getUsersProfile";
import postMessage from "./_modules/postMessage";
import createRespBlock from "./_modules/createResp";

type ResponseBody = {
  token: string;
  team_id: string;
  team_domain: string;
  channel_id: string;
  channel_name: string;
  user_id: string;
  user_name: string;
  command: string;
  text: string;
  response_url: string;
  trigger_id: string;
  enterprise_id?: string;
  enterprise_name?: string;
};

const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
const noTextErrorMessage = "`/getprofile hoge@hoge.hoge`の形式で入力してね";
const mailErrorMessage = "メードアドレスが正しくありません";
const userErrorMessage = "誰だかわかりませんでした:cry:";
const tryMessage = "プロフィールを取得します:sunglasses:";

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const params = qs.parse(event.body) as ResponseBody;
  const addresses = params.text;
  const channel = params.channel_id;
  const mailAddressObject = addresses && addresses.split(",");
  console.log(params);
  let body = "";

  if (mailAddressObject) {
    body = tryMessage;

    mailAddressObject.forEach(async mailAddress => {
      if (!regexp.test(mailAddress)) {
        body = `${mailAddress}: ${mailErrorMessage}`;
        return;
      }
      const profileObj = await getUsersProfile({ mailAddress, channel });
      const userObj = profileObj["user"];

      if (userObj) {
        postMessage({
          channel,
          text: "",
          ...createRespBlock({
            mailAddress,
            realName: userObj.profile.real_name_normalized,
            displayName: userObj.display_name_normalized,
            icon: userObj.profile.image_1024 || userObj.profile.image_512
          })
        });
      } else {
        postMessage({
          channel,
          text: userErrorMessage
        });
        return;
      }
    });
  } else {
    body = noTextErrorMessage;
  }

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
};

export { handler };
