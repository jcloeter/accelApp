// import { setPracticeData } from "./model";
import * as model from "/src/model.js";
import formViews from "/src/views/formViews.js";
import nextLevelViews from "/src/views/nextLevelViews.js";
import piecesViews from "/src/views/piecesViews.js";

const controlNewPiece = function (e) {
  //1) Add new piece information to practiceList
  model.state.practiceList.push(model.setPracticeData(e));
  // console.log(model.state);

  //2)Passing in only the practiceList to make a new pc on UI
  piecesViews.updateUI(model.state.practiceList);

  //3) Generate Markup for checkboxes/nextLevel btn
  // nextLevelViews._generateMarkup(model.state.practiceList[0]);
};

const controlPracticeMode = function () {};

const controlNextLevel = function () {
  model.incNextLevel(model.state.practiceList[0]);
};

const init = function () {
  formViews.addHandlerFormSubmit(controlNewPiece);
  piecesViews.addHandlerHash();
  //Add listener to parent element and use event delegation:
  nextLevelViews.addHandlerNextLevel(controlNextLevel);
};

init();
