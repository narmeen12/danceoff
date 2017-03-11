var apiKey = 45793272;
var sessionId = '1_MX40NTc5MzI3Mn5-MTQ4OTI1MDExNDI3Mn5KRVBUYmFrNTB4QUp3NG1FaGFhanFvazd-fg';
var token = 'T1==cGFydG5lcl9pZD00NTc5MzI3MiZzaWc9ZTEzNjI2OWFjNWI5NGFkZDQ0MTc0MDQ1ZjczZGJiZjhhY2U1NGEwNTpzZXNzaW9uX2lkPTFfTVg0ME5UYzVNekkzTW41LU1UUTRPVEkxTURFeE5ESTNNbjVLUlZCVVltRnJOVEI0UVVwM05HMUZhR0ZoYW5GdmF6ZC1mZyZjcmVhdGVfdGltZT0xNDg5MjY1MjAwJm5vbmNlPTAuOTY4NzAyMjUzNDU1NTA4OCZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTQ5MTg1MzU5OQ';

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  session.on('streamCreated', function(event) {
    session.subscribe(event.stream);

  });

  session.on('sessionDisconnected', function(event) {
    console.log('You were disconnected from the session.', event.reason);
  });

  session.connect(token, function(error) {
    // if (!error) {
    //   var publisher = OT.initPublisher('publisher', {
    //     insertMode: 'append',
    //     width: '100%',
    //     height: '100%'
    //   });
    //
    //   session.publish(publisher);
    // } else {
    //   console.log('There was an error connecting to the session: ', error.code, error.message);
    // }
  });
 }

window.onload = function() {
	initializeSession();
}
