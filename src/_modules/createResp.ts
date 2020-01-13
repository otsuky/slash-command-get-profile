type Arg = {
  realName: string;
  id: string;
  displayName: string;
  title: string;
  statusEmoji: string;
  statusText: string;
  mailAddress: string;
  icon: string;
};

const createRespBlock = ({
  realName,
  id,
  displayName,
  title,
  statusEmoji,
  statusText,
  mailAddress,
  icon
}: Arg) => ({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*【${realName}】*\n${`<@${id}>`}${statusText &&
          " " + statusText}${statusEmoji && " " + statusEmoji}\n${title &&
          title}\n${mailAddress}`
      },
      accessory: {
        type: "image",
        image_url: icon,
        alt_text: "アイコン画像"
      }
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "アイコン画像"
          },
          action_id: "icon",
          url: icon
        }
      ]
    }
  ]
});

export default createRespBlock;
