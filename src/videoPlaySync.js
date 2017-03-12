var songIds = ["c6YtKdE5F1I", "dZJ9tx_zk4A", "HdzI-191xhU", "sFTCEBhEggs", "OKGasVAmOJs", "Cufz92eiUPQ"];
var count = 0;


 var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

    var currentSong = "HdzI-191xhU";

    console.log("THIS CURRENT SONG ID:",currentSong)

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100',
          width: '500',
          videoId: currentSong,
          playerVars: { 'start': 40, 'end': 80},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

function readyDancer() {
  count++;
}


function onPlayerReady(event) {

	var check = setInterval(function(){ 
	if(count === 2) {
	  // displayCountDown();
	  event.target.playVideo();
	  clearInterval(check);
	  
	  } else {
	  	console.log("Waiting for other dancer");
	  }
	}, 5000);
  check();

}


function displayCountDown() {

	var index = 0;

	var countdown = setInterval(function(){

	 if(index > 4) {

	 	clearInterval(countdown);

	 } else {

		document.createElement('img');
		countdown.src = "../assets/"+index+".png"

		countdown.innerHtml(numbers);

		index++
	 }

  },1000)
}

function onPlayerStateChange() {
	if (event.data === 0) {          
          $('#player').fadeOut();
      }
  }


session.on('connectionCreated', function(event) {
   count++
});
