import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();
const port = 5173;

app.use(cors({
  origin:'http://localhost:5173',
  credentials: true,
}))
app.use(express.json()); // allows json objects to be posted
app.use(express.urlencoded({ extended: true })); // allows json objects with strings and arrays

// require('./config/mongoose.config')
// require('./routes/blog.routes')(app); // IMPORTING THE ROUTES EXPORT (shorthand version)
// require('./routes/projects.routes')(app);
// require('./routes/Quotes.route')(app);

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'txsingleton89@gmail.com', // Replace with your Gmail email address
      pass: 'jdqb ffiy aofl wowl', // Replace with your Gmail password or app password
    },
  });

  app.options('/send-email', cors()); // Handle preflight requests

  
  app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    //console.log('Received form data:', { name, email, message });
  
    const mailOptions = {
      from: email,
      to: 'txsingleton89@gmail.com', // Replace with the recipient email address
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error)
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });

app.listen(port, () => console.log(`Listening on port: ${port}`));