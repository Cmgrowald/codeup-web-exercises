"use strict";
(() => {
    let count = 0
    const maxcount = 5
  const timeoutId = setTimeout ( function () {
      setTimeout(function () {
          let newProfilePic = document.getElementById("profile-pic");
          newProfilePic.src = "https://via.placeholder.com/140";
          count++;

          if (count >= maxcount) {
              clearTimeout(timeoutId)
          }
      }, 2000);

      setTimeout(function () {
          let newProfileName = document.getElementById("profile-name");
          newProfileName.innerHTML = "Doe John";
          count++;

          if (count >= maxcount) {
              clearTimeout(timeoutId2)
          }
      }, 4000);
      setTimeout(function () {
          let newProfileDesc = document.getElementById("profile-desc");
          newProfileDesc.style.color = "red";
          newProfileDesc.style.fontFamily = "Arial"
          count++;

          if (count >= maxcount) {
              clearTimeout(timeoutId3)
          }
      }, 6000);

      setInterval(function(){
      document.getElementById('profile-card').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

      }, 2000);



  })




})();
