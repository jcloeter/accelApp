class Pieces {
  _parent = document.querySelector(".pieces");
  _ulElement = document.querySelector(".pieces__list");
  _data;

  updateUI = function (data) {
    this._data = data;

    //To only add on most recent piece and keep additions:
    //this._generateMarkup(data[data.length - 1]);

    //To generate entire list, do this:
    this._ulElement.innerHTML = "";
    data.forEach((pc) => this._generateMarkup(pc));
  };

  //Adds newest piece to list of pieces
  _generateMarkup = function (pc) {
    console.log(pc);
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
  addHandlerHash = function (callback) {
    this._ulElement.addEventListener("click", function (e) {
      const li = e.target.closest(".pieces__item");
      if (!li) return;
      window.location.hash = li.attributes.href.nodeValue;
    });

    window.addEventListener("hashchange", function (e) {
      console.log(e.newURL.split("#"));
      console.log(
        "HASH- you will be redirected to id " + e.newURL.split("#")[1]
      );
      const id = +e.newURL.split("#")[1];
      callback(id);
    });
  };

  //Clears piecesView list from screen:
  clearPiecesList = function () {
    console.log("clear was called");
    this._parent.innerHTML = "";
  };
}

export default new Pieces();
