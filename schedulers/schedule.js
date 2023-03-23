
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
const sendMail=require('../controllers/sendmail');

rule.hour = 14;
rule.minute = 48;

schedule.scheduleJob(rule, function(){
    sendMail('forus.mh@gmail.com');
    console.log('hlw sir!');
  });