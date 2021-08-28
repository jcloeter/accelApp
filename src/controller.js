// import { setPracticeData } from "./model";
import * as model from "/src/model.js";
import formViews from "/src/views/formViews.js";
import nextLevelViews from "/src/views/nextLevelViews.js";
import piecesViews from "/src/views/piecesViews.js";
import practiceViews from "/src/views/practiceViews.js";

const controlNewPiece = function (e) {
  //1) Add new piece information to practiceList
  model.state.practiceList.push(model.setPracticeData(e));
  // console.log(model.state);

  //2)Passing in only the practiceList to make a new pc on UI
  piecesViews.updateUI(model.state.practiceList);

  //3) Generate Markup for checkboxes/nextLevel btn
  // nextLevelViews._generateMarkup(model.state.practiceList[0]);
};

const controlPracticeMode = function (id) {
  //1) Clears list of pieces from UI
  piecesViews.clearPiecesList();

  //2) Find piece that hash was changed to and CHANGE CURRENT PIECE STATE HERE
  const prPiece = model.findPieceUsingId(id);
  if (!prPiece) console.log("couldnt find hash location😩😩😩");
  // model.state.currentPiece = prPiece;
  // console.log(model.state);

  //3) Render prPiece to screen:
  practiceViews.renderPracticePage(prPiece);

  //4) Generate checkboxes specific to curr Practice piece:
  nextLevelViews.render(prPiece);
};

const controlNextLevel = function (prObj) {
  model.incNextLevel(prObj);
  nextLevelViews.update();
};

const init = function () {
  formViews.addHandlerFormSubmit(controlNewPiece);
  piecesViews.addHandlerHash(controlPracticeMode);
  //Add listener to parent element and use event delegation:
  nextLevelViews.addHandlerNextLevel(controlNextLevel);
};

init();
