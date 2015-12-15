// ==UserScript==
// @name        autocontinue
// @namespace   www.watchnaruto.tv
// @include     http://www.watchnaruto.tv/*
// @exclude     http://www.watchnaruto.tv/img/*
// @version     1
// @grant       none
// ==/UserScript==

function loop() {  
  loc=window.location.href;
  if(loc=="http://www.watchnaruto.tv/")
    location.assign("http://www.watchnaruto.tv/naruto-shippuuden_episodes");
  var eng = document.querySelectorAll("a");
  for(var i=0; i < eng.length; i++){
    if(eng[i].innerHTML== "English Dubbed" && eng[i].className != "active"){
      eng[i].click();
    }
  }
  location.assign(document.querySelectorAll("embed")[0].src);
}
loop();