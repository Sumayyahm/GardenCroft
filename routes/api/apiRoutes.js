const router = require("express").Router();
const db = require("../../models");
const nodemailer= require('nodemailer');
require("dotenv").config();

// Matches with "/api/plants"
router.get("/plants", (req,res) => {
    db.Plant
          .find({plant_type: "Annual"})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
});

// Matches with "/api/perennial"
router.get("/perennial", (req, res) => {
    db.Plant
            .find({plant_type: "Perennial"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
});

// Matches with "/api/roses"
router.get("/roses", (req, res) => {
    db.Plant
            .find({plant_type: "Rose Plant"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
})

router.get("/form",() => {
    resizeBy.send('welcome to my forms')
});

router.post("/form", (req,res) => {
    console.log("I am inside post route")
    let data= req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.GMAIL_PASS
        }
    });

    let mailOptions={
        from: `${data.email}`,
        to: "sumayyahmariam019@gmail.com",
        subject: `Message from ${data.firstName}`,
        html: `
        
        <h3>Message Details</h3>
        <ul>
        <li>Name : ${data.firstName} ${data.lastName}</li>
        <li>Email: ${data.email}</li>
        <li>Phone Number: ${data.phoneNumber}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error){
            return res.send(error);
        }
        console.log("Message has been sent");
        return res.send("Success!");
    });

    smtpTransport.close();
})

module.exports = router;

// {plant_type: { $regex: new RegExp(req.query.q, 'i')}}