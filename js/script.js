var video = document.querySelector('main video');
const replay = document.querySelector('main div button:nth-of-type(2)')
var videosBattlefieldV = [
    "https://v.redd.it/gkuml9ii3h721/DASH_4_8_M",
    "https://v.redd.it/eb94yp75c0721/DASH_4_8_M",
    "https://v.redd.it/2zghuuq03d621/DASH_9_6_M",
    "https://v.redd.it/0kgd8upav9121/DASH_1_2_M",
    "https://v.redd.it/nrw6rjrz9uz11/DASH_9_6_M",
    "https://v.redd.it/voowuvrmofc21/DASH_9_6_M",
    "https://v.redd.it/204jamboqkb21/DASH_9_6_M",
    "https://v.redd.it/wvj3bs9d0iy11/DASH_4_8_M",
    "https://v.redd.it/29dm41nl4jc21/DASH_9_6_M",
    "https://v.redd.it/cmhkliyub5c21/DASH_9_6_M",
    "https://giant.gfycat.com/BriskOffensiveAstarte.webm",
    "https://giant.gfycat.com/GoodEnviousIguanodon.webm",
  ]

window.addEventListener('load', function(event) {
  activeVideoUrl = videosBattlefieldV[Math.round(Math.random() * (videosBattlefieldV.length - 1))];
  video.setAttribute('src', activeVideoUrl);
});

var randomBug = document.querySelector('main div button:nth-of-type(1)');
randomBug.addEventListener('click', function(event) {
  video = document.querySelector('main video'),
  activeVideoUrl = videosBattlefieldV[Math.round(Math.random() * (videosBattlefieldV.length - 1))];
  video.setAttribute('src', activeVideoUrl);
  event.preventDefault();
});

replay.addEventListener('click', function(event) {
  video.currentTime = 0;
});
