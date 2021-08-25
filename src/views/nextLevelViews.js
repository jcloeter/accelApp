class nextLevelView {
  _nextLvlBtn = document.querySelector(".btn__next-level");
  //   _nextLvlBtn = document.getElementById("btn__next-level");
  _parent = document.getElementById("next-level-form");

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

      //3)If btn was clicked AND all checkboxes are checked, call function
      callback();

      //4) Finally, remove checks from boxes
      boxes.forEach((b) => {
        b.checked = false;
      });
    });
  };

  _generateMarkup = function (prObj) {
    const reps = prObj.repetitionsPerLevel;
    // this._generateCheckboxes(3);
    const markup = `
      <label for="repetition">Click After Each Repetition:</label>
      ${this._generateCheckboxes(reps)}
      <button type="submit" class="btn__next-level" id="btn__next-level">Next Level</button>
      `;
    this._parent.insertAdjacentHTML("afterbegin", markup);
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

export default new nextLevelView();
