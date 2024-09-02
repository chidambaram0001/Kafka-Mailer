import nodemailer from 'nodemailer';
import {SMTP_HOST,SMTP_PASS,SMTP_PORT,SMTP_USER} from './config/config.js'
import {welcome} from './templates/welcome.js';
import {order} from './templates/orderTemplate.js'
import {tracking} from './templates/trackingTemplate.js'
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth:{
        user: SMTP_USER,
        pass: SMTP_PASS
    }
})




export const sendMail = async(data)=>{
    let template = data.template;
    const mailOptions = {
        from: '"chidhu" <************@gmail.com>', // sender address
        to: data.email, // recipient address
        subject: 'how you doing?'
    };
    switch (template){
        case 'welcomeMail':{
            const template = welcome(data);
            mailOptions['text'] = template.textContent;
            mailOptions['html'] = template.htmlContent;
            mailOptions['subject'] = 'WelCome User'
            break;
        }
        case 'orderMail':{
            const template = order(data);
            mailOptions['text'] = template.textContent;
            mailOptions['html'] = template.htmlContent;
            mailOptions['subject'] = 'Order Mail'
            break;
        }
        case 'trackMail':{
            const template = tracking(data);
            mailOptions['text'] = template.textContent;
            mailOptions['html'] = template.htmlContent;
            mailOptions['subject'] = 'Tracking Mail'
            break;
        }
        default:{
            break;
        }
    }



   // for (const recipient of recipients) {
		// Personalize the email content
		

		

		// Send the email
		try {
			//let info = await transporter.sendMail(mailOptions);
			console.log('Mail sent as below:');
            console.log(mailOptions)
		} catch (error) {
			console.error('Error sending email:', error);
		}
	//}
}