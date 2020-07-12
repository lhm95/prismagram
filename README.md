# prismagram

Instagram clone with Express + Prisma + React and React Native

## User Stories

- [x] Create account
- [ ] Request Secret
- [ ] Confirm Secret (Login)
- [ ] Like / Unlike a photo
- [ ] Commnet on a photo
- [ ] Search by user
- [ ] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow User
- [ ] See the full photo
- [ ] Edit my profile
- [ ] Upload a photo
- [ ] Edit the photo (Delete)
- [ ] See the feed

## Babel version error solution

npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-stage-2

## Sendgrid integrating

const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = "API_KEY"

sgMail.setApiKey(sendGridAPIKey)

const msg = {
to: 'lhm95@kakao.com',
from: 'ggr.lhm95@gmail.com',
subject:'My first mail from node',
text:"I'm sending myself an email"
}

sgMail.send(msg).then(() => {
console.log('Message sent')
}).catch((error) => {
console.log(error.response.body)
})

Sendgrid - Sender Authentication - Single Sender Verification - complete - node.js exec
