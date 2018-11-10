// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
document.addEventListener("DOMContentLoaded", function(){
  const Http = new XMLHttpRequest();
  const url = "http://127.0.0.1:5000/getData";
  Http.open("GET", url);
  Http.send();
  
  Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
}
chrome.notifications.create(
  'name-for-notification',{   
  type: 'basic', 
  title: "This is a notification", 
  message: "hello there!",
  iconUrl: 'badges/blue-robot.png'
  },function() {} 
);
});

