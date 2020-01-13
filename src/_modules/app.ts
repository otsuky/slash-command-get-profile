import { WebClient } from "@slack/web-api";
console.log(process.env.SLACK_ACCESS_TOKEN);
export default new WebClient(process.env.SLACK_ACCESS_TOKEN);
