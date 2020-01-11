const qs = require("querystring");

import postThumbnail from "./_modules/postThumbnail";

exports.handler = (event, context, callback) => {
  const params = qs.parse(event.body);
  const mailAddresses = params.text;
  const channel = params.channel_id;
  let body = "";

  if (mailAddresses) {
    const mailAddressObject = mailAddresses.split(/\r\n|\n/);

    mailAddressObject.forEach(mailAddress => {
      postThumbnail({
        mailAddress,
        channel
      });
    });
    body = "プロフィールを取得します:sunglasses:";
  } else {
    body = "`/getthumbnail hoge@hogeohoge.hoge`の形式で入力してください";
  }

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
};
