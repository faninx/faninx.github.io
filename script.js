function playVideo() {
		document.getElementById('modal').style.display='flex';
		var video = document.getElementById('video');
		video.currentTime = 0;
		video.play();
}

function closeModal() {
	document.getElementById('modal').style.display='none';
	document.getElementById('video').pause();
}

function isMobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	return true;
	} else {
		return false;
	}
}