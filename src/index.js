import './css/styles.css';
import $ from "jquery";
import { takeInput, waltDisney, player1 } from "./overworldState.js";
import {assignPlayer, assignEnemy} from "./battleState.js";

let gameState = "titleScreen";

export function loopA(){
  takeInput();
  waltDisney.clear();
  player1.drawSelf();
  if(gameState ==="overWorld") {
    setTimeout(()=>{requestAnimationFrame(loopA);} , 1000/12);
  }
}

$('#character-create-form').submit((event) => {
  event.preventDefault();
  $("#gameDiv").show();
  $("#titleScreen").hide();
  const name = $('#charName').val();
  assignPlayer(name);
  changeGameState('overWorld');
});

function changeGameState(string){
  gameState = string;
  if (gameState === "overWorld") {
    loopA();
    $('.character-create').hide();
    $('.battle-action').hide();
  } else if (gameState === "battleState") {
    $('.battle-action').show();

  }
}