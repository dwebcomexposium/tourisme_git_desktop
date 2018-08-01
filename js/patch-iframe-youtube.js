;$(document).ready(function(){

 var youtubeVideo = $('#zone1 > div.part-video > iframe');

document.addEventListener("webkitfullscreenchange", function () {
  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
    $(youtubeVideo).css('transform','translateX(0%)');
  } else {
     if (!document.fullscreenElement || !document.mozFullScreenElement || !document.webkitFullscreenElement) {
      $(youtubeVideo).css('transform','translateX(-50%)');
    }
  }
});

});