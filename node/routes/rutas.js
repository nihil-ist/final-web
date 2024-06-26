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
    const {arrivalDate,departureDate,arrivalTime,name,phone,email,price,address,nights} = req.body;
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        console.log(`
            Data received:
                Arrival Date: ${arrivalDate}
                Departure Date: ${departureDate}
                Arrival Time: ${arrivalTime}
                Name: ${name}
                Phone: ${phone}
                Email : ${email}
                Price : ${price}
                Address : ${address}
                Nights : ${nights}
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
            to: `${email}`,
            subject: `Summary of your reservation`,
            text: `Thank you for putting your trust in us, here is your reservation information:
                    Your arrival date: ${arrivalDate} 
                    Your departure date: ${departureDate}
                    Your arrival time (the day when you arrive): ${arrivalTime}
                    Name of the person that did the reservation: ${name}
                    Phone of the person that did the reservation:: ${phone}
                    Email of the person that did the reservation:: ${email}
                    Total price: ${price}
                    Address of the place the reservation was done: ${address}
                    Nights the person is going to spend in: ${nights}`,
            html: `<p>
                        Thank you for putting your trust in us, here is your reservation information:<br>
                        Your arrival date: ${arrivalDate}<br>
                        Your departure date: ${departureDate}<br>
                        Your arrival time (the day when you arrive): ${arrivalTime}<br>
                        Name of the person that did the reservation: ${name}<br>
                        Phone of the person that did the reservation:: ${phone}<br>
                        Email of the person that did the reservation:: ${email}<br>
                        Total price: ${price}<br>
                        Address of the place the reservation was done: ${address}<br>
                        Nights the person is going to spend in: ${nights}
                    </p>`
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
        const month = new Date(reservation.arrivalDate).getMonth() + 1; // Meses de 0 a 11 +1 para que sea de 1 a 12
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