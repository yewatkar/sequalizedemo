const nodemailer = require("nodemailer");


  
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashwiniyewatkar07@gmail.com',
      pass: 'gecaaslqeqjvobsd'
    }
  });

module.exports=(email)=>{
  
  
  var mailOptions = {
    from: 'ashwiniyewatkar07@gmail.com',
    to: email,
    subject: 'Welcome Mail',
    // text: 'user registration done!'
    html:`<h1 style='color:red;'> user registration done!</h1>
   <img src='https://s0.2mdn.net/simgad/4784720522436457258'/> 
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });}

