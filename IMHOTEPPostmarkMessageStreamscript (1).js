console.log("hello, world");
// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient("423ee822-bee9-4974-8234-1d095e65be2e");

client.sendEmail({
  "From": "directoroperations@ericmath4youbyusgroupillinois.com",
  "To": "erichilarysmith@outlook.com",
  "Subject": "Hello from Postmark",
  "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
  "TextBody": "Hello from Postmark!",
  "MessageStream": "imhotep-bizarros"
});
