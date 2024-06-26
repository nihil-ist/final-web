const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('../firebase-config');

router.get('/', (req,res) => {
    res.send({message:"Im functioning right now"});
});

router.post('/contactMail',(req,res) =>{
    res.send({message:"Hola te voy a mandar un correo"});
    const {subject,useremail,description,emailadmin} = req.body;
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        console.log(`
            Data received:
                Subject: ${subject} 
                Email: ${useremail} 
                Description or comment: ${description} 
                Admin email: ${emailadmin}
        `);
        //configuracion del transporte del correo
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'theapartmentbnb@gmail.com',
                pass: 'hnis dmaz zoju jkqo'
            },
            secure: true
        });
    
        //the message that goes from the user
        const message = {
            from: 'theapartmentbnb@gmail.com',
            to: `${emailadmin}`,
            subject: `${subject}`,
            text: `${useremail} sent to us a message, their message is the following: ${description}`,
            html: `<p>${useremail} sent to us a message, their message is the following: ${description}</p>`
        };
        
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
        });
    });
});

router.post('/citaMail',(req,res) =>{ //ahorita esto no esta funcionando
    res.send({message:"Hola te voy a mandar un correo"});
    const {subject,useremail,description,emailadmin} = req.body;
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        console.log(`
            Data received:
                Subject: ${subject} 
                Email: ${useremail} 
                Description or comment: ${description} 
                Admin email: ${emailadmin}
        `);
        //configuracion del transporte del correo
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'theapartmentbnb@gmail.com',
                pass: 'hnis dmaz zoju jkqo'
            },
            secure: true
        });
    
        //the message that goes from the user
        const message = {
            from: 'theapartmentbnb@gmail.com',
            to: `${emailadmin}`,
            subject: `${subject}`,
            text: `${useremail} sent to us a message, their message is the following: ${description}`,
            html: `<p>${useremail} sent to us a message, their message is the following: ${description}</p>`
        };
        
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            console.log('Mail sent');
        });
    });
});


// obtener las fechas de las reserv
router.get('/reservations-by-month', async (req, res) => {
    try {
      const ref = db.ref('reservations');
      const snapshot = await ref.once('value');
      const data = snapshot.val();
  
      const reservationsByMonth = {};
  
      for (const key in data) {
        const reservation = data[key];
        const month = new Date(reservation.arrivalDate).getMonth() + 1; // Meses de 0 a 11, sumamos 1 para que sea de 1 a 12
        if (reservationsByMonth[month]) {
          reservationsByMonth[month]++;
        } else {
          reservationsByMonth[month] = 1;
        }
      }
  
      res.json(reservationsByMonth);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;