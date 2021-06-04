var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}



$(document).ready(function() {
	$(document).on('keydown', function(event) {
		event.preventDefault();
		var key;
		if (event.key === "/") key = "slash";
		else if (event.key === " ") key = "Space";
		else if (event.key === ".") key = "punt";
		else if (event.key === ",") key = "comma";
		else if (event.key === ";") key = "semicolon";
		else if (event.key === "'") key = "quote";
		else if (event.key === "\\") key = "backslash";
		else if (event.key === "]") key = "bracketright";
		else if (event.key === "[") key = "bracketleft";
		else if (event.key === "=") key = "equal";
		else if (event.key === "-") key = "minus";
		else if (event.key === "`") key = "backquote";
		else if (event.key === "?") key = "question";
		else if (event.key === ">") key = "flexright";
		else if (event.key === "<") key = "flexleft";
		else if (event.key === "\"") key = "doublequote";
		else if (event.key === ":") key = "colon";
		else if (event.key === "|") key = "stick";
		else if (event.key === "}") key = "CurlyBracketR";
		else if (event.key === "{") key = "CurlyBracketL";
		else if (event.key === "~") key = "tilde";
		else if (event.key === "_") key = "Underscore";
		else if (event.key === "+") key = "plus";
		else if (event.key === "!") key = "exclamation";
		else if (event.key === "@") key = "at";
		else if (event.key === "#") key = "hashtag";
		else if (event.key === "$") key = "dollarsign";
		else if (event.key === "%") key = "percent";
		else if (event.key === "^") key = "circumflex";
		else if (event.key === "&") key = "and";
		else if (event.key === "*") key = "asterisk";
		else if (event.key === "(") key = "roundbracketleft";
		else if (event.key === ")") key = "roundbracketright";
		else key = event.key;
		console.log(key)
		$('.'+key).removeClass('active');
		$('.'+key).addClass('press');
		if (key === "CapsLock") {						//for Firefox
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}
		if (key === "quote") {							//for Dutch layouts
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}
		if (key === "doublequote") {					//for Dutch layouts
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}
		if (key === "backquote") {						//for Dutch layouts
			$('.'+key).removeClass('press');
			$('.'+key).addClass('active');
		}

	});


$(document).on('keyup press', function(event) {
		event.preventDefault();
		var key;
		// var audio = new Audio('easteregg.mp3');
		if (event.key === "/") key = "slash";
		else if (event.key === " ") key = "Space";
		else if (event.key === ".") key = "punt";
		else if (event.key === ",") key = "comma";
		else if (event.key === ";") key = "semicolon";
		else if (event.key === "'") key = "quote";
		else if (event.key === "\\") key = "backslash";
		else if (event.key === "]") key = "bracketright";
		else if (event.key === "[") key = "bracketleft";
		else if (event.key === "=") key = "equal";
		else if (event.key === "-") key = "minus";
		else if (event.key === "`") key = "backquote";
		else if (event.key === "?") key = "question";
		else if (event.key === ">") key = "flexright";
		else if (event.key === "<") key = "flexleft";
		else if (event.key === "\"") key = "doublequote";
		else if (event.key === ":") key = "colon";
		else if (event.key === "|") key = "stick";
		else if (event.key === "}") key = "CurlyBracketR";
		else if (event.key === "{") key = "CurlyBracketL";
		else if (event.key === "~") key = "tilde";
		else if (event.key === "_") key = "Underscore";
		else if (event.key === "+") key = "plus";
		else if (event.key === "!") key = "exclamation";
		else if (event.key === "@") key = "at";
		else if (event.key === "#") key = "hashtag";
		else if (event.key === "$") key = "dollarsign";
		else if (event.key === "%") key = "percent";
		else if (event.key === "^") key = "circumflex";
		else if (event.key === "&") key = "and";
		else if (event.key === "*") key = "asterisk";
		else if (event.key === "(") key = "roundbracketleft";
		else if (event.key === ")") key = "roundbracketright";
		else key = event.key;
		//console.log(key);
		$('.lastkey').empty().append(key);
		$('.'+key).removeClass('press');
		$('.'+key).addClass('active');
		var keyspressed = 86 - ($('.active').length)
   		$('.test').empty().append(keyspressed);
   		var allkeys = "All your keys work!";
   		if (keyspressed === 0) $('.test').empty().append(allkeys);
   		// if (keyspressed === 10) audio.play();
	});

$(document).bind("contextmenu",function(e){
    	return false;
  	});


});

var OSName
if (navigator.appVersion.indexOf("Win") !=-1) {
	OSName="Windows";
}
else if (navigator.appVersion.indexOf("Mac") !=-1) {
	OSName="MacOS";
}
else if (navigator.appVersion.indexOf("X11") !=-1) {
	OSName="UNIX";
}
else if (navigator.appVersion.indexOf("Linux") !=-1) {
	OSName="Linux";
}

var startkey="notsure";
if (OSName==="Windows") startkey="windows";
if (OSName==="MacOS") startkey="command";

var altkey="notsure";
if (OSName==="Windows") altkey="alt";
if (OSName==="MacOS") altkey="option";

var enterkey="notsure";
if (OSName==="Windows") enterkey="enter"
if (OSName==="MacOS") enterkey="return";

var backkey="notsure";
if (OSName==="Windows") backkey="backspace"
if (OSName==="MacOS") backkey="delete";

function toggle_visibility(id) {
       var e = document.getElementById(id);
       var f = $('.container');
       var g = $('.hidenumpad');
       var h = $('.topcontainer')
       if(e.style.display === 'none') {
          e.style.display = 'inline-block';
      	  f.css("width", "1150");
      	  h.css("width", "1150");
      	  g.empty().append('Hide Numpad');
      	}
       else {
          e.style.display = 'none';
          f.css("width", "900");
          h.css("width", "900");
          g.empty().append('Show Numpad');
       }

   }


   var record = document.querySelector('.record');
   var stop = document.querySelector('.stop');
   var soundClips = document.querySelector('.sound-clips');
   var canvas = document.querySelector('.visualizer');
   var mainSection = document.querySelector('.main-controls');
   
   // disable stop button while not recording
   
   stop.disabled = true;
   
   // visualiser setup - create canvas
   
   var canvasCtx = canvas.getContext("2d");
   
   //main block for doing the audio recording
   
   if (navigator.mediaDevices.getUserMedia) {
	 console.log('getUserMedia supported.');
   
	 var constraints = { audio: true };
	 var chunks = [];
   
	 var micName = '';
	 var onSuccess = function(stream) {
	   var mediaRecorder = new MediaRecorder(stream);
   
	   var audioSourceInfo = stream.getAudioTracks()[0];
   
	   micName = audioSourceInfo.label;
	   document.querySelector('.current-microphone').textContent = "Current microphone: \"" + micName + "\"";
   
	   visualize(stream);
   
	   record.addEventListener("click", startRecording);
	   record.addEventListener("touchstarat", startRecording);
   
	   stop.addEventListener("click", stopRecording);
	   stop.addEventListener("touchend", stopRecording);
   
	   function startRecording() {
		 mediaRecorder.start();
		 console.log(mediaRecorder.state);
		 console.log("recorder started");
		 record.style.background = "red";
		 document.querySelector('.visualizer').classList.add('active');
		 stop.disabled = false;
		 record.disabled = true;
	   }
   
   
	   function stopRecording() {
		 mediaRecorder.stop();
		 console.log(mediaRecorder.state);
		 console.log("recorder stopped");
		 record.style.background = "";
		 record.style.color = "";
		 // mediaRecorder.requestData();
   
		 stop.disabled = true;
		 record.disabled = false;
	   }
   
	   var clipCount = 0;
	   mediaRecorder.onstop = function(e) {
		 clipCount +=1;
		 console.log("data available after MediaRecorder.stop() called.");
   
		 var clipName = 'clip ' + clipCount + ' recorded using "' + micName + '"';
		 console.log(clipName);
		 var clipContainer = document.createElement('article');
		 var clipLabel = document.createElement('p');
		 var audio = document.createElement('audio');
		 var deleteButton = document.createElement('button');
		
		 clipContainer.classList.add('clip');
		 audio.setAttribute('controls', '');
		 deleteButton.textContent = 'Delete';
		 deleteButton.className = 'delete';
   
		 if(clipName === null) {
		   clipLabel.textContent = 'My unnamed clip';
		 } else {
		   clipLabel.textContent = clipName;
		 }
   
		 clipContainer.appendChild(audio);
		 clipContainer.appendChild(clipLabel);
		 clipContainer.appendChild(deleteButton);
		 soundClips.appendChild(clipContainer);
   
		 audio.controls = true;
		 var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
		 chunks = [];
		 var audioURL = window.URL.createObjectURL(blob);
		 audio.src = audioURL;
		 console.log("recorder stopped");
   
		 deleteButton.onclick = function(e) {
		   evtTgt = e.target;
		   evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
		 }
   
		 clipLabel.onclick = function() {
		   var existingName = clipLabel.textContent;
		   var newClipName = prompt('Enter a new name for your sound clip?');
		   if(newClipName === null) {
			 clipLabel.textContent = existingName;
		   } else {
			 clipLabel.textContent = newClipName;
		   }
		 }
	   }
   
	   mediaRecorder.ondataavailable = function(e) {
		 chunks.push(e.data);
	   }
	 }
   
	 var onError = function(err) {
	   console.log('The following error occured: ' + err);
	 }
   
	 navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
   
   } else {
	  console.log('getUserMedia not supported on your browser!');
   }
   
   function visualize(stream) {
	 var audioCtx = new (window.AudioContext || webkitAudioContext)();
	 var source = audioCtx.createMediaStreamSource(stream);
   
	 var analyser = audioCtx.createAnalyser();
	 analyser.fftSize = 2048;
	 var bufferLength = analyser.frequencyBinCount;
	 var dataArray = new Uint8Array(bufferLength);
   
	 source.connect(analyser);
	 //analyser.connect(audioCtx.destination);
   
	 draw()
   
	 function draw() {
	   WIDTH = canvas.width
	   HEIGHT = canvas.height;
   
	   requestAnimationFrame(draw);
   
	   analyser.getByteTimeDomainData(dataArray);
   
	   canvasCtx.fillStyle = 'rgb(200, 200, 200)';
	   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
   
	   canvasCtx.lineWidth = 2;
	   canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
   
	   canvasCtx.beginPath();
   
	   var sliceWidth = WIDTH * 1.0 / bufferLength;
	   var x = 0;
   
   
	   for(var i = 0; i < bufferLength; i++) {
	
		 var v = dataArray[i] / 128.0;
		 var y = v * HEIGHT/2;
   
		 if(i === 0) {
		   canvasCtx.moveTo(x, y);
		 } else {
		   canvasCtx.lineTo(x, y);
		 }
   
		 x += sliceWidth;
	   }
   
	   canvasCtx.lineTo(canvas.width, canvas.height/2);
	   canvasCtx.stroke();
   
	 }
   }
   
   window.onresize = function() {
	 canvas.width = mainSection.offsetWidth;
   }
   
   window.onresize();
   
