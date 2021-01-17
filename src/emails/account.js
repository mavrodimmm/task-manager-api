const sgMail = require('@sendgrid/mail')
const { getMaxListeners } = require('../models/task')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'fedotovn125@gmail.com',
        subject: 'Welcome to Task Manager',
        text: `Welcome to Task Manager App, ${name}. Let us know how you get along with the app.`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fedotovn125@gmail.com',
        subject: 'Leaving Task Manager?',
        text: `${name}, We can see that you have decided to leave the Task Manager App. Let us know what is the reason for you to leave.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}


