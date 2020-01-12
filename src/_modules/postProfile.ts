import getUsersProfile from "./getUsersProfile";
import postMessage from "./postMessage";

type Arg = {
  mailAddress: string;
  channel: string;
};

const postProfile = async ({ mailAddress, channel }: Arg) => {
  if (!user.profile) {
    postMessage({
      channel,
      text: "誰だかわかりませんでした:cry:"
    });
    return;
  }

  postMessage({
    channel: channel,
    text: "",
    blocks: [
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `${user.profile.email}`
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${user.profile.real_name_normalized}*\n@${
            user.profile.display_name_normalized
          }\nicon: ${user.profile.image_1024 || user.profile.image_512}`
        },
        accessory: {
          type: "image",
          image_url: `${user.profile.image_1024 || user.profile.image_512}`,
          alt_text: "アイコン画像"
        }
      }
    ]
  });
};

export default postProfile;
