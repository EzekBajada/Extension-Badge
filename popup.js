// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var limit = 0; 
document.addEventListener("DOMContentLoaded", function(){
  
  const Http = new XMLHttpRequest();
  const url = "http://192.168.1.175:5000/getdata";
  Http.open("GET", url);
  Http.send();
  
  Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
}
});

document.getElementById("btn").addEventListener("click", changeLimit);

function changeLimit(){
  if(limit == 100){
    document.getElementById("btn").setAttribute("disabled", true);
  }
  limit += 10;
  if(0<= limit && limit < 33){
    var image = document.getElementById("robot");
    image.setAttribute("src","./badges/red-robot.png");
    var bar = document.getElementById("bar");
    bar.setAttribute("style","width: " + limit + "%");
    bar.setAttribute("aria-valuenow",limit);
    document.getElementById("no7").innerHTML = 100 - limit;
    document.getElementsByClassName("money")[0].innerHTML = limit;
  } 
  else if (33 <= limit && 66 > limit){
    var image = document.getElementById("robot");
    image.setAttribute("src","./badges/blue-robot.png");
    var bar = document.getElementById("bar");
    bar.setAttribute("style","width: "+ limit + "%");
    bar.setAttribute("aria-valuenow",limit);
    document.getElementById("no7").innerHTML = 100 - limit;
    document.getElementsByClassName("money")[0].innerHTML = limit;
    

  }
  else {
    var image = document.getElementById("robot");
    image.setAttribute("src","./badges/black-robot.png");
    var bar = document.getElementById("bar");
    bar.setAttribute("style","width: "+ limit + "%");
    bar.setAttribute("aria-valuenow",limit);
    document.getElementById("no7").innerHTML = 100 - limit;
    document.getElementsByClassName("money")[0].innerHTML = limit;
  }
}

