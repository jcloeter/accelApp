// import { setPracticeData } from "./model";
import * as model from "/src/model.js";
import formViews from "/src/views/formViews.js";
import nextLevelViews from "/src/views/nextLevelViews.js";

const controlNewPiece = function (e) {
  model.state.practiceList.push(model.setPracticeData(e));
  console.log(model.state);
};

const controlNextLevel = function () {
  model.incNextLevel(model.state.practiceList[0]);
};

const init = function () {
  formViews.addHandlerFormSubmit(controlNewPiece);
  nextLevelViews.addHandlerNextLevel(controlNextLevel);
};

init();
