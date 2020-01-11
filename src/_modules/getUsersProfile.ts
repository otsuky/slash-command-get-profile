import app from "./app";
import postMessage from "./postMessage";

const getUsersProfile = async options => {
  const result = await app.users
    .lookupByEmail({
      email: options.mailAddress
    })
    .catch(err => {
      postMessage({
        channel: options.channel,
        text: "プロフィール取得できません:cry:"
      });
      console.log(err);

      return false;
    });

  return result.user;
};

export default getUsersProfile;
