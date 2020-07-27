
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
   canvas.width = window.innerWidth
   canvas.height = window.innerHeight
 const mouse = {
            x: undefined,
            y: undefined
}

function clock() {
  let now = new Date();
   let ctx = document.getElementById('canvas').getContext('2d');
       ctx.save();
       ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
       ctx.translate(500, 150);
       ctx.scale(0.75, 0.75);
       ctx.rotate(-Math.PI / 2);
       ctx.strokeStyle = 'black';
       ctx.fillStyle = 'white';
       ctx.lineWidth = 8;
       ctx.lineCap = 'round';
/*

  // Hour marks
      ctx.save();
  for (let i = 0; i < 12; i++) {
       ctx.beginPath();
       ctx.rotate(Math.PI / 6);
       ctx.moveTo(100, 0);
       ctx.lineTo(120, 0);
       ctx.stroke();
  }
       ctx.restore();

  // Minute marks
       ctx.save();
       ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5!= 0) {
       ctx.beginPath();
       ctx.moveTo(117, 0);
       ctx.lineTo(120, 0);
       ctx.stroke();
    }
       ctx.rotate(Math.PI / 30);
  }
      ctx.restore();
  
 */
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hr  = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = 'black';

  // write Hours
  ctx.save();
  ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
 
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = '##476170';
  ctx.fillStyle = '#476170';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#ee6c4d';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);


function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();