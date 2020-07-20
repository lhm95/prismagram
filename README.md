# prismagram

Instagram clone with Express + Prisma + React and React Native

## User Stories

- [x] Create account
- [x] Request Secret
- [x] Confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Commnet on a photo
- [x] Search by user
- [x] Search by location
- [x] Follow User
- [x] Unfollow User
- [x] Edit my profile
- [x] See user profile
- [x] See my profile
- [x] See the full photo
- [x] Upload a photo
- [x] Edit the photo (Delete)
- [x] See the feed
- [ ] See rooms
- [ ] See room
- [ ] Send private Message
- [ ] Receive Message (Realtime)

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
