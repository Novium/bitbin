# bitbin
Simple pastebin-esque service made in Meteor just for practice, that doesn't mean that it doesn't work tho.

![Image of bitbin](http://puu.sh/hzZHG/486f7918ed.png)

## Installation//Contributing
1. Download meteor
2. Create config.js (example config below)
3. Run meteor
``` javascript
AdminConfig = {
  adminEmails: ['mail@novium.pw'],
  collections:
  {

  }
}

Meteor.settings = {
  "public": {
      "reCaptcha": {
          "siteKey": "[recaptcha sitekey]"
      }
  },
  "reCaptcha": {
      "secretKey": "[recaptcha secretkey]"
  }
}
```
