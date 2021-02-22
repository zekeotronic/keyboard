/*Notes and keyboard button values
c: S = 83 ||
c#: E = 69 ||
d: D = 68 ||
d#: R = 82 ||
e: F = 70 ||
f: G = 71 ||
f#: Y = 89 ||
g: H = 72 ||
g#: U = 85 ||
a: J = 74 ||
a#: I = 73 ||
b: K = 75 ||
c: L  = 76 ||

*/

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 83) {
    new Audio('/resources/audio/C.mp3').play();
    document.getElementById('c').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'C';
  } else if (e.keyCode === 69) {
    new Audio('/resources/audio/C-sharp.mp3').play();
    document.getElementById('c-sharp').style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById('note').innerHTML = 'C# / Db';
  } else if (e.keyCode === 68) {
    new Audio('/resources/audio/D.mp3').play(); 
    document.getElementById('d').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'D';
  } else if (e.keyCode === 82) {
    new Audio('/resources/audio/D-sharp.mp3').play();
    document.getElementById('d-sharp').style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById('note').innerHTML = 'D# / Fb';
  } else if (e.keyCode === 70) {
    new Audio('/resources/audio/E.mp3').play(); 
    document.getElementById('e').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'E';
  } else if (e.keyCode === 71) {
    new Audio('/resources/audio/F.mp3').play(); 
    document.getElementById('f').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'F';
  } else if (e.keyCode === 89) {
    new Audio('/resources/audio/F-sharp.mp3').play(); 
    document.getElementById('f-sharp').style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById('note').innerHTML = 'F# / Gb';
  } else if (e.keyCode === 72) {
    new Audio('/resources/audio/G.mp3').play(); 
    document.getElementById('g').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'G';
  } else if (e.keyCode === 85) {
    new Audio('/resources/audio/G-sharp.mp3').play(); 
    document.getElementById('g-sharp').style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById('note').innerHTML = 'G# / Ab';
  } else if (e.keyCode === 74) {
    new Audio('/resources/audio/A.mp3').play(); 
    document.getElementById('a').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'A';
  } else if (e.keyCode === 73) {
    new Audio('/resources/audio/A-sharp.mp3').play(); 
    document.getElementById('a-sharp').style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById('note').innerHTML = 'A# / Bb';
  } else if (e.keyCode === 75) {
    new Audio('/resources/audio/B.mp3').play(); 
    document.getElementById('b').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'B';
  } else if (e.keyCode === 76) {
    new Audio('/resources/audio/C-Oct.mp3').play(); 
    document.getElementById('c-octave').style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('note').innerHTML = 'C';
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 83) {
    document.getElementById('c').style.backgroundColor = '';
  } else if (e.keyCode === 69) {
    document.getElementById('c-sharp').style.backgroundColor = '';
  } else if (e.keyCode === 68) {
    document.getElementById('d').style.backgroundColor = '';
  } else if (e.keyCode === 82) {
    document.getElementById('d-sharp').style.backgroundColor = '';
  } else if (e.keyCode === 70) {
    document.getElementById('e').style.backgroundColor = '';
  } else if (e.keyCode === 71) {
    document.getElementById('f').style.backgroundColor = '';
  } else if (e.keyCode === 89) {
    document.getElementById('f-sharp').style.backgroundColor = '';
  }else if (e.keyCode === 72) {
    document.getElementById('g').style.backgroundColor = '';
  } else if (e.keyCode === 85) {
    document.getElementById('g-sharp').style.backgroundColor = '';
  } else if (e.keyCode === 74) {
    document.getElementById('a').style.backgroundColor = '';
  } else if (e.keyCode === 73) {
    document.getElementById('a-sharp').style.backgroundColor = '';
  } else if (e.keyCode === 75) {
    document.getElementById('b').style.backgroundColor = '';
  } else if (e.keyCode === 76) {
    document.getElementById('c-octave').style.backgroundColor = '';
  }
});

function playC() { 
  new Audio('/resources/audio/C.mp3').play(); 
  document.getElementById('note').innerHTML = 'C';
}
function playCSharp() {
  new Audio('/resources/audio/C-sharp.mp3').play(); 
  document.getElementById('note').innerHTML = 'C# / Db';
}
function playD() { 
  new Audio('/resources/audio/D.mp3').play(); 
  document.getElementById('note').innerHTML = 'D';
}
function playDSharp() {
  new Audio('/resources/audio/D-sharp.mp3').play(); 
  document.getElementById('note').innerHTML = 'D# / Eb';
}
function playE() { 
  new Audio('/resources/audio/E.mp3').play(); 
  document.getElementById('note').innerHTML = 'E';
}
function playF() { 
  new Audio('/resources/audio/F.mp3').play(); 
  document.getElementById('note').innerHTML = 'F';
}
function playFSharp() { 
  new Audio('/resources/audio/F-sharp.mp3').play(); 
  document.getElementById('note').innerHTML = 'F# / Gb';
}
function playG() { 
  new Audio('/resources/audio/G.mp3').play(); 
  document.getElementById('note').innerHTML = 'G';
}
function playGSharp() {
  new Audio('/resources/audio/G-sharp.mp3').play();
  document.getElementById('note').innerHTML = 'G# / Ab'; 
}
function playA() { 
  new Audio('/resources/audio/A.mp3').play(); 
  document.getElementById('note').innerHTML = 'A';
}
function playASharp() {
  new Audio('/resources/audio/A-sharp.mp3').play(); 
  document.getElementById('note').innerHTML = 'A# / Bb';
}
function playB() { 
  new Audio('/resources/audio/B.mp3').play(); 
  document.getElementById('note').innerHTML = 'B';
}
function playCOct() { 
  new Audio('/resources/audio/C-Oct.mp3').play(); 
  document.getElementById('note').innerHTML = 'C';
}