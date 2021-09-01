// import { setPracticeData } from "./model";
import * as model from "/src/model.js";
import formViews from "/src/views/formViews.js";
import nextLevelViews from "/src/views/nextLevelViews.js";
import piecesViews from "/src/views/piecesViews.js";
import practiceViews from "/src/views/practiceViews.js";
import navigationViews from "/src/views/navigationViews.js";

const controlNewPiece = function (e) {
  //1) Add new piece information to practiceList
  model.state.practiceList.push(model.setPracticeData(e));

  //Adding new adjusted state to localStorage
  model.setLocalStorage(model.state);

  //2)Passing in only the practiceList to make a new pc on UI
  piecesViews.updateUI(model.state.practiceList);

  //3)Re add eventListeners after a new piece is added
  piecesViews.addHandlerDeletePiece(controlDeletePiece);

  //4)Clear form view!
  formViews.clear();

  //4.5) Make sure there won't be a duplicate pr piece in pr mode
  practiceViews.clear();
};

const controlPracticeMode = function (id) {
  //0)Clear Form
  formViews.clear();

  //0.5) Make sure there won't be a duplicate pr piece in pr mode
  practiceViews.clear();

  //1) Clears list of pieces from UI
  piecesViews.clearPiecesList();

  //2) Find piece that hash was changed to and CHANGE CURRENT PIECE STATE HERE
  const prPiece = model.findPieceUsingId(id);
  model.state.currentPiece = prPiece;
  // console.log(model.state);

  //2.5) Adding adjusted state to localStorage
  model.setLocalStorage(model.state);

  //3) Render prPiece to screen:
  practiceViews.renderPracticePage(prPiece);

  //4) Generate checkboxes specific to curr Practice piece:
  nextLevelViews.render(prPiece);

  //5) Render prHistory from previous sessions:
  nextLevelViews.update();
};

const controlNextLevel = function (prObj) {
  model.incNextLevel(prObj);
  nextLevelViews.update();
  practiceViews.updatePracticePage(prObj);
};

const controlNavigationToHome = function () {
  //Clear Practice Info:
  practiceViews.clear();

  //Rerender view of our pieces:
  piecesViews.updateUI(model.state.practiceList);

  //Re add listener after navigation, must be done after updateUI or btns wont exist
  piecesViews.addHandlerDeletePiece(controlDeletePiece);
};

const controlInitialPage = function () {
  model.getLocalStorage();
  //This updates UI so localStorage may be rendered:
  piecesViews.updateUI(model.state.practiceList);
};

const controlDeletePiece = function (id) {
  //1)Find pc using ud

  //1)Delete id from state
  model.deleteSinglePieceFromState(id);

  //2)Read the function name c'mon
  model.deleteSinglePieceLocalStorage(id);

  //3)Rerender piecesView
  piecesViews.updateUI(model.state.practiceList);

  //4 Re add the event listener for the btns:
  piecesViews.addHandlerDeletePiece(controlDeletePiece);
};

const controlShowForm = function () {
  formViews.clear();
  formViews.showForm();
};

const init = function () {
  controlInitialPage();
  navigationViews.addHandlerInitHash();
  formViews.addHandlerShowForm();
  formViews.addHandlerLetsPractice();
  formViews.addHandlerFormSubmit(controlNewPiece);
  piecesViews.addHandlerDeletePiece(controlDeletePiece);
  piecesViews.addHandlerHash(controlPracticeMode, controlNavigationToHome);
  //Add listener to parent element and use event delegation:
  nextLevelViews.addHandlerNextLevel(controlNextLevel);
};

init();
