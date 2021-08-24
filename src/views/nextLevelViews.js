class nextLevelView {
  //   _nextLvlBtn = document.querySelector(".btn__next-level");
  _nextLvlBtn = document.getElementById("btn__next-level");

  addHandlerNextLevel = function (callback) {
    this._nextLvlBtn.addEventListener("click", function (e) {
      e.preventDefault();
      callback();
    });
  };
}

export default new nextLevelView();
