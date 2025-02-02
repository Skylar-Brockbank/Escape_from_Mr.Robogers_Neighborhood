export default class AudioManager{
  constructor(){
    this.setVolume = true;
  }
  static setVolumeLevels(){
    const audio1 = document.getElementById('over-world-audio');
    const audio2 = document.getElementById('item-audio');
    const audio3 = document.getElementById('fight-audio');
    const audio4 = document.getElementById('death-audio');
    const audio5 = document.getElementById('creepy-rogers-audio');
    const audio6 = document.getElementById('boss-fight-audio');
    const audio7 = document.getElementById('win-game-audio');
    audio1.volume = 0.1;
    audio2.volume = 0.3;
    audio3.volume = 0.1;
    audio4.volume = 0.1;
    audio5.volume = 0.1;
    audio6.volume = 0.1;
    audio7.volume = 0.1;
    this.setVolume = false;
  }
  static startAudio(string, bool){
    let audio = document.getElementById(string);
    audio.loop = bool;
    audio.currentTime = 0;
    if(audio.paused){
      audio.play();
    }
  }
  static pauseAudio(string){
    const audio = document.getElementById(string);
    if(!audio.paused){
      audio.pause();
    }
  }
  static continueAudio(string){
    const audio = document.getElementById(string);
    if(audio.paused){
      audio.play();
    }
  }
}
