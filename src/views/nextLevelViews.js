// import practiceViews from "/src/views/practiceViews.js";

class nextLevelView {
  _nextLvlBtn;
  _prObj;
  _parent = document.getElementById("next-level-form");

  //We have a duplicate of _prPorgressHistory, could cause problems later. This class should be a child of practiceViews
  _prProgressHistory = document.querySelector(".practice__progress--history");

  addHandlerNextLevel = function (callback) {
    const that = this;

    this._parent.addEventListener("click", function (e) {
      //1) Checking if click occured on the button, if not, return
      const btn = e.target.closest(".btn__next-level");
      if (!btn) return;

      //2)Checking if all checkboxes are checked, if not all checkboxes are checked, we still want to prevDef or section will refesh
      const boxes = Array.from(that._parent.getElementsByTagName("input"));
      e.preventDefault();
      if (!boxes.every((b) => b.checked)) return;

      //3)If btn was clicked AND all checkboxes are checked, call function and pass in curent prObj
      callback(that._prObj);

      //4) Finally, remove checks from boxes
      boxes.forEach((b) => {
        b.checked = false;
      });
    });
  };

  render = function (prObj) {
    this._prObj = prObj;
    this._nextLvlBtn = document.querySelector(".btn__next-level");
    // this._generateLevelHistory();
  };

  update = function () {
    this._generateLevelHistory();
  };

  //Uses current state prList, slices off 0 Lvl and only displays real lvls completed
  _generateLevelHistory = function () {
    this._prProgressHistory.innerHTML = "";
    // console.log(this._prObj.progress);

    //Slice off first init level, we wont display it
    const arrLvlAfterOne = this._prObj.progress.progHistory.slice(1);
    console.log(arrLvlAfterOne);
    // const startTempo = this._prObj.progress.currTempo;
    // console.log(startTempo);

    let markup = arrLvlAfterOne
      .map((lvl, i) => {
        console.log(`Array we are looping over is ${arrLvlAfterOne}`);
        console.log(`i equals ${i}`);
        console.log(lvl);
        // console.log(this._prObj.progress.currTempo);
        // console.log(startTempo);

        // if (lvl[0] === 0) return "";
        return `<p class="practice__progress--history-summary"> ✅ Level ${
          lvl.lvl
        }: ${this._prObj.repetitionsPerLevel} ${
          this._prObj.repetitionsPerLevel == 1 ? "repetition" : "repetitions"
        } at ${lvl.lvlTempo} bpm</p>
      <p class="practice__progress--history-date"><small>${lvl.date}</small></p>
       `;
      })
      .reverse()
      .join("");
    console.log(markup);

    this._prProgressHistory.insertAdjacentHTML("afterbegin", markup);
  };

  // _generateInitialRepetitionsMarkup = function () {
  //   const reps = this._prObj.repetitionsPerLevel;
  //   // this._generateCheckboxes(3);
  //   const markup = `
  //     <label for="repetition">Click After Each Repetition:</label>
  //     ${this._generateCheckboxes(reps)}
  //     <button type="submit" class="btn__next-level" id="btn__next-level">Next Level</button>
  //     `;
  //   this._parent.insertAdjacentHTML("afterbegin", markup);
  // };

  // _generateCheckboxes = function (reps) {
  //   let boxes = ``;
  //   for (let x = 0; x < reps; x++) {
  //     boxes += `<input
  //       type="checkbox"
  //       class="input__checkbox--repetition"
  //       name="repetition"
  //       /> `;
  //   }
  //   return boxes;
  // };
}

export default new nextLevelView();
