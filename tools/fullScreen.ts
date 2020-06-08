export const fullScreen = () => {
  const el = document.body;
  const isFullscreen =document['fullScreen'] ||document['mozFullScreen'] ||document['webkitIsFullScreen'];

  if (!isFullscreen) {
    if (el['requestFullscreen']) {
      el['requestFullscreen']();
    }else if (el['mozRequestFullScreen']) {
      el['mozRequestFullScreen']();
    }else if (el['webkitRequestFullscreen']) {
      el['webkitRequestFullscreen']();
    }

  }else {
    if (document['exitFullscreen']) {
      document['exitFullscreen']();
    }else if (document['mozCancelFullScreen']) {
      document['mozCancelFullScreen']();
    }else if (document['webkitExitFullscreen']) {
      document['webkitExitFullscreen']();
    }
  }
}
