var songIds = ["c6YtKdE5F1I", "dZJ9tx_zk4A", "HdzI-191xhU", "sFTCEBhEggs", "OKGasVAmOJs", "Cufz92eiUPQ"];
var widget = document.getElementById('widgetDiv');



 var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

    var currentSong = songIds[Math.floor(Math.random() * 6).toString()];

    console.log("THIS CURRENT SONG",currentSong)

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '0',
          width: '500',
          videoId: currentSong,
          start:40,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 30000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
