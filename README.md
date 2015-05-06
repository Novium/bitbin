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

## Contributing
A few pointers whilst contributing to the project (which is entirely optional).

You can use any preferred coding style, it doesn't really matter for me and if I find it overly annoying I will change it to my own style which I've developed over the years.

Otherwise, do anything you want, add any feature, we can always find a place for it.

Remember that all your work will be licensed under the MIT license and that copyright infringement is illegal etc.... You get the gist.