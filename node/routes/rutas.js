const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', (req,res) => {
    res.send({message:"Im functioning right now"});
});

router.post('/mail',(req,res) =>{
    res.send({message:"Hola te voy a mandar un correo"});
    const {subject,email,description} = req.body;
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        console.log(`
            Data received:
                Subject: ${subject} 
                Email: ${email} 
                Description or comment: ${description} 
        `);
        //configuracion del transporte del correo
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'ivanelmen420@gmail.com',
                pass: 'qhhu wkaz kwkl ofbq'
            },
            secure: true
        });
    
        //configuracion del email que se va a mandar
        const message = {
            from: 'ivanelmen420@gmail.com',
            to: `${email}`,
            subject: 'Response to your request',
            text: 'We received your comment, we\'ll get in contact with you as soon as possible :D',
            html: '<p>We received your comment, we\'ll get in contact with you as soon as possible :D</p>'
        };
        
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            console.log('Mail sent :D');
        });
    });
});

module.exports = router;