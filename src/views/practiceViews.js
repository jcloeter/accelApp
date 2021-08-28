class Practice {
  _parentEl = document.querySelector(".practice");
  _prInformation = document.querySelector(".practice__pc--information");
  _form = document.getElementById("next-level-form");
  _prHistory = document.querySelector(".practice__progress--history");

  _prPiece;

  clear = function () {
    //Ex for future projects: clearing the parent el also messes with the scaffolding that we will later need to reinsert html into later:
    // this._parentEl.innerHTML = "";
    this._prInformation.innerHTML = "";
    this._form.innerHTML = "";
    this._prHistory.innerHTML = "";
  };

  //This is called initially to render the pr Page
  renderPracticePage = function (pc) {
    this._prPiece = pc;
    this._generatePracticePieceMarkup(pc);
    this._generateInitialRepetitionsMarkup();
  };

  //Called after each level to update piece summary
  updatePracticePage = function (pc) {
    this._prInformation.innerHTML = "";
    this._generatePracticePieceMarkup(pc);
  };

  //Passing in pc from renderPracticePage instead of class var bc lazy:
  _generatePracticePieceMarkup = function (pc) {
    const markup = `
      <div class="practice__pc--title">
        <h3 class="practice__pc--title-main">${pc.piece} ${
      pc.composer ? "by " + pc.composer : ""
    }</h3>
        <h4 class="practice__pc--title-sub">${pc.excerptDescription}${
      pc.measureNumbers ? ", mm. " + pc.measureNumbers : ""
    }</h4>
      </div>
        <div class="practice__pc--progress">
        <div class="practice__pc--progress-level">Level ${
          pc.progress.currLevel
        }/${pc.progress.totalLevels}</div>
        <div class="practice__pc--progress-tempo">${
          pc.progress.currTempo
        } bpm, Goal of ${pc.goalTempo}  bpm. ${
      pc.progress.progressPercent
    }%</div>
      </div>
    `;
    this._prInformation.insertAdjacentHTML("afterbegin", markup);
  };

  _generateInitialRepetitionsMarkup = function () {
    const reps = this._prPiece.repetitionsPerLevel;
    const markup = `
      <label for="repetition">Click After Each Repetition:</label>
      ${this._generateCheckboxes(reps)}
      <button type="submit" class="btn__next-level" id="btn__next-level">Next Level</button>
      `;

    //Had to include form right here because this markup had been put in a different parent, so there was no space to even click on in listener
    this._form.insertAdjacentHTML("beforeend", markup);
  };

  _generateCheckboxes = function (reps) {
    let boxes = ``;
    for (let x = 0; x < reps; x++) {
      boxes += `<input
        type="checkbox"
        class="input__checkbox--repetition"
        name="repetition"
        /> `;
    }
    return boxes;
  };
}

export default new Practice();
