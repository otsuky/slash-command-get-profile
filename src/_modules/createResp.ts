type Arg = {
  mailAddress: string;
  realName: string;
  displayName: string;
  icon: string;
};

const createRespBlock = ({
  mailAddress,
  realName,
  displayName,
  icon
}: Arg) => ({
  blocks: [
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: mailAddress
        }
      ]
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${realName}*\n@${displayName}\nicon: ${icon}`
      },
      accessory: {
        type: "image",
        image_url: icon,
        alt_text: "アイコン画像"
      }
    }
  ]
});

export default createRespBlock;
