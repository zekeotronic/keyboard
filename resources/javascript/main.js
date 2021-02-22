let videoShow = false;

let toggleVideo = function () {
  let getVideo = document.querySelector('video');
  if (videoShow === false) {
    getVideo.visibility = 'visible';
    colorChange = true;

  } else if (videoShow === true) {
    getVideo.visibility = 'hidden';

    colorChange = false;
  }
}