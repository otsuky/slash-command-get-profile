import app from "./app";
import postMessage from "./postMessage";
import { WebAPICallResult } from "@slack/web-api";

type Arg = {
  mailAddress: string;
  channel: string;
};

const getUsersProfile = async ({ mailAddress, channel }: Arg) => {
  console.log("==========");
  console.log(mailAddress);
  console.log("==========");
  const result = await app.users
    .lookupByEmail({
      email: mailAddress
    })
    .catch(err => {
      // postMessage({
      //   channel,
      //   text: "プロフィール取得できません:cry:"
      // });
      console.log("==========");
      console.log("%o", err.data.response_metadata.acceptedScopes);
      console.log("==========");
    });

  return result;
};

export default getUsersProfile;
