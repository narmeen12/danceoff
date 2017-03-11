var apiKey = 45793272;
var sessionId = '1_MX40NTc5MzI3Mn5-MTQ4OTI1MDExNDI3Mn5KRVBUYmFrNTB4QUp3NG1FaGFhanFvazd-fg';
var token = 'T1==cGFydG5lcl9pZD00NTc5MzI3MiZzaWc9OTQyYmM0ZTI4ZmQyZjAyNzZiM2E2OTcyYmYyN2JjMzg5Y2E1NzE2MzpzZXNzaW9uX2lkPTFfTVg0ME5UYzVNekkzTW41LU1UUTRPVEkxTURFeE5ESTNNbjVLUlZCVVltRnJOVEI0UVVwM05HMUZhR0ZoYW5GdmF6ZC1mZyZjcmVhdGVfdGltZT0xNDg5MjUwMTc3Jm5vbmNlPTAuNDgzMzc3MzQ0NzIwOTIxMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDkxODM4NTc2';

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    });
  });

  session.on('sessionDisconnected', function(event) {
    console.log('You were disconnected from the session.', event.reason);
  });

  session.connect(token, function(error) {
    if (!error) {
      var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      });

      session.publish(publisher);
    } else {
      console.log('There was an error connecting to the session: ', error.code, error.message);
    }
  });
}

window.onload = function() {
	initializeSession();
}
