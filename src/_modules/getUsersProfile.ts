import app from "./app";
import postMessage from "./postMessage";

type Arg = {
  mailAddress: string;
  channel: string;
};

const getUsersProfile = async ({ mailAddress, channel }: Arg) => {
  const result = await app.users
    .lookupByEmail({
      email: mailAddress
    })
    .catch(err => {
      postMessage({
        channel,
        text: "プロフィール取得できません:cry:"
      });
      console.log(err);
    });
  return result;
};

export default getUsersProfile;
