var videosBattlefieldV = [
    "https://v.redd.it/gkuml9ii3h721/DASH_4_8_M",
    "https://v.redd.it/eb94yp75c0721/DASH_4_8_M",
    "https://v.redd.it/2zghuuq03d621/DASH_9_6_M",
    "https://v.redd.it/0kgd8upav9121/DASH_1_2_M",
  ]

window.addEventListener("load", function(event) {
  video = document.querySelector('main video'),
  activeVideoUrl = videosBattlefieldV[Math.round(Math.random() * (videosBattlefieldV.length - 1))];
  video.setAttribute('src', activeVideoUrl);
});
