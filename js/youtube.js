  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    //html에서 작성한 id player
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8', // 최초재생할 유튜브 영상id
      playerVars:{
        autoplay : true,
        loop: true,
        playlist : 'An6LvWQuj_8'
      },
      events: {
        onReady : function (event) {
          event.target.mute() //음소거
        }
      }
    });
  }

  /**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()