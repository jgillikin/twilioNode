// Twilio Credentials
const accountSid = 'AC1fcd6e3d7c8ec0f060c6aefdacd642d1';
const authToken = '42fefdf7e260c080f5b91d40dfb399d3';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+17572865248',
    from: '+16153984510',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  },
  (err, message) => {
    console.log('error');
  }
);