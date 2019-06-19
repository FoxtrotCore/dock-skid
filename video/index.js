setTimeout(function () {
	if (Hls.isSupported()) {
    var hls = new Hls();
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, function() {
      console.log("Video & HLS.js are bound");
      hls.loadSource("http://localhost/011/ep011-errormole-master.m3u8");

    })
    hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
      console.log("Manifest parsed, found " + data.levels.length + " quality levels");
      //var playPromise = video.play();
		//	if(playPromise !== undefined)
		//	{
		//		playPromise.then(_ => {
		//			console.log("Playback successful");
		//		})
		//		.catch(error => {
		//			console.error("Error starting playback: " + error);
		//		})
		//	}
    })

    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        switch(data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            console.log("fatal network error encountered, try to recover");
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("fatal media error encountered, try to recover from: " + data.details);

            hls.recoverMediaError();
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    });
  }
  else {
    console.error("HLS.js is NOT Supported");
  }
}, 200);
