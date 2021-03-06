class Pieces {
  _parent = document.querySelector(".pieces");
  _ulElement = document.querySelector(".pieces__list");
  _data;

  updateUI = function (data) {
    this._data = data;

    //If there arent any pieces, tell user how to add!
    if (!data[0]) return (this._ulElement.innerHTML = "");
    {
      /* <p>No pieces yet, click ➕ to add</p> */
    }
    //To generate entire list, do this:
    this._ulElement.innerHTML = "";
    data.forEach((pc) => this._generateMarkup(pc));
  };

  //Adds newest piece to list of pieces
  _generateMarkup = function (pc) {
    const markup = `
        <li class="pieces__item" href=#${pc.excerptId}>
          <div class='pieces__item-progress-bar'>${
            pc.progress.progressPercent
          }%</div>
              <div class="pieces__item-description">
                  <h4 class="pieces__item-piece-naming">${pc.piece} ${
      pc.composer ? `<span class='composer-span'> by ${pc.composer}</span>` : ""
    }</h4>
                  <p class="pieces__item-excerpt-naming">${
                    pc.excerptDescription
                  }${pc.measureNumbers ? ", mm. " + pc.measureNumbers : ""}</p>
              </div>
              <div class="pieces__item-progress">
                  <p>Lvl ${pc.progress.currLevel}/${pc.progress.totalLevels}</p>
                  <p>${pc.progress.currTempo} bpm, Goal of ${
      pc.goalTempo
    }  bpm</p>
              </div>
      <button class="pieces__item-delete-btn" type="button">✖ </button>
        </li>
      `;
    this._ulElement.insertAdjacentHTML("afterbegin", markup);
  };

  //Listens for a piece to be clicked on, called practiceController
  addHandlerHash = function (callback, toHome) {
    this._ulElement.addEventListener("click", function (e) {
      //Not ideal, but I need to manually catch cases where the btn and not the ul was clicked
      if (e.target.type === "button") return;
      console.log("the ul eventListener proceeded");
      const li = e.target.closest(".pieces__item");
      if (!li) return;
      window.location.hash = li.attributes.href.nodeValue;
    });

    window.addEventListener("hashchange", function (e) {
      //We want to allow internal links, not an idea way though
      if (e.newURL.includes("#pieces")) return;

      //if the new url doesnt contain a hash, it means were going to the home page

      if (!e.newURL.includes("#")) return toHome();

      //If !id, means user went back to home page
      const id = +e.newURL.split("#")[1];
      callback(id);
    });
  };

  //This function should be listening for a click on the X, but it bubble up and causes the practice mode to be engaged
  addHandlerDeletePiece = function (callback) {
    const deleteBtn = document.querySelectorAll(".pieces__item-delete-btn");

    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const dltId = +e.target
          .closest(".pieces__item")
          .attributes.href.nodeValue.split("#")[1];
        return callback(dltId);
      });
    });
  };

  deletePieceAnimation(id, animDur) {
    const li = this._parent.querySelectorAll(".pieces__item");
    li.forEach((li) => {
      const liId = +li.attributes.href.value.split("#")[1];
      if (id !== liId) return;
      li.style.transition = `all .75s`;
      li.style.transform = "translateY(30rem)";
      li.style.opacity = "0";
    });
  }

  //Clears piecesView list from screen:
  clearPiecesList = function () {
    this._ulElement.innerHTML = "";
  };
}

export default new Pieces();
