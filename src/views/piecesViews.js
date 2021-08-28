class Pieces {
  _parent = document.querySelector(".pieces");
  _ulElement = document.querySelector(".pieces__list");
  _data;

  updateUI = function (data) {
    this._data = data;

    //To generate entire list, do this:
    this._ulElement.innerHTML = "";
    data.forEach((pc) => this._generateMarkup(pc));
  };

  //Adds newest piece to list of pieces
  _generateMarkup = function (pc) {
    const markup = `
        <li class="pieces__item" href=#${pc.excerptId}>
            <div class="pieces__item-description">
                <h4>${pc.piece} ${pc.composer ? "by " + pc.composer : ""}</h4>
                <p>${pc.excerptDescription}${
      pc.measureNumbers ? ", mm. " + pc.measureNumbers : ""
    }</p>
            </div>
            <div class="pieces__item-progress">
                <p>Lvl ${pc.progress.currLevel}/${pc.progress.totalLevels}</p>
                <p>${pc.progress.currTempo} bpm, Goal of ${
      pc.goalTempo
    }  bpm</p>
            </div>
        </li>
      `;
    this._ulElement.insertAdjacentHTML("afterbegin", markup);
  };

  //Listens for a piece to be clicked on, called practiceController
  addHandlerHash = function (callback, toHome) {
    this._ulElement.addEventListener("click", function (e) {
      const li = e.target.closest(".pieces__item");
      if (!li) return;
      window.location.hash = li.attributes.href.nodeValue;
    });

    window.addEventListener("hashchange", function (e) {
      //if the new url doesnt contain a hash, it means were going to the home page
      if (!e.newURL.includes("#")) return toHome();

      //If !id, means user went back to home page
      const id = +e.newURL.split("#")[1];
      callback(id);
    });
  };

  //Clears piecesView list from screen:
  clearPiecesList = function () {
    this._ulElement.innerHTML = "";
  };
}

export default new Pieces();
