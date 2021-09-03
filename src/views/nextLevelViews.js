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

    let markup = arrLvlAfterOne
      .map((lvl, i) => {
        return `
        <div class="practice__progress--history-unit">
        <p class="practice__progress--history-summary"> <span class="level-number">${lvl.lvl}</span> ${lvl.lvlTempo} bpm</p>
      <p class="practice__progress--history-date"><small>${lvl.date}</small></p>
      </div>
       `;
      })
      .reverse()
      .join("");

    this._prProgressHistory.insertAdjacentHTML("afterbegin", markup);
  };
}

export default new nextLevelView();

{
  /* <p class="practice__progress--history-summary"> ✅ Level ${lvl.lvl}: ${
          this._prObj.repetitionsPerLevel
        } ${
          this._prObj.repetitionsPerLevel == 1 ? "repetition" : "repetitions"
        } at ${lvl.lvlTempo} bpm</p> */
}
