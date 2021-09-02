class Form {
  _form = document.getElementById("new-piece-form");
  _addNewPieceButton = document.getElementById("add-new-piece");

  addHandlerFormSubmit = function (callback) {
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      callback(e);
    });
  };

  addHandlerShowForm = function (callback) {
    const that = this;
    this._addNewPieceButton.addEventListener("click", function () {
      console.log("in a bit this will reveal the form");
      that._generateMarkup();
    });
  };

  //Had plans for this but decided to change:
  //This handler will change the header, will disapper once it leads user down to pieces area
  // addHandlerLetsPractice = function (callback) {
  //   const letsPractice = document.getElementById("lets-practice-btn");
  //   letsPractice.addEventListener("click", function () {
  //     console.log(
  //       "controlling header now, this will shift from greeting mode. Heading will adjust and quote will disapper"
  //     );
  //     letsPractice.innerHTML = "";
  //   });
  // };

  clear = function () {
    this._form.innerHTML = "";
  };

  showForm = function () {
    this.clear();
    this._generateMarkup();
  };

  _generateMarkup = function () {
    // const markup = `
    // <label for="composer">Composer</label>
    // <input list="composer-list" type="text" value="Mahler" id="composer" />
    // <datalist id="composer-datalist">
    //   <option value="Bach"></option>
    //   <option value="Beethoven"></option>
    //   <option value="Mahler"></option>
    // </datalist>
    // <label for="piece">Name of Piece</label>
    // <input type="text" list="piece-list" id="piece" value="Symphony 1" />
    // <datalist id="piece-datalist">
    //   <option value="Symphony"></option>
    // </datalist>
    // <label for="measure-numbers">Measures</label>
    // <input
    //   id="measure-numbers"
    //   type="text"
    //   placeholder="7-8"
    //   value="103-107"
    // />
    // <label for="excerpt-description">Excerpt Description</label>
    // <input
    //   type="text"
    //   id="excerpt-description"
    //   placeholder="Minor arpeggios in development"
    //   value="Minor arpeggios in development"
    // />
    // <label for="starting-tempo">Starting Tempo</label>
    // <input id="starting-tempo" type="number" value="60" min="30" max="220" />
    // <label for="goal-tempo">Goal Tempo</label>
    // <input id="goal-tempo" type="number" value="120" min="30" max="220" />

    // <label for="repetitions">Repetitions per level</label>
    // <input id="repetitions" type="number" value="1" min="1" max="6" />

    // <label for="tempo-increase">Tempo Increase per Level</label>
    // <input id="tempo-increase" type="number" value="4" min="1" max="10" />

    // <button id="new-piece-btn" type="submit">Create</button>
    // `;

    const markupExperiment = `
    <h3 class="form__piece-title">Describe Your Piece.</h3>
    <p class="form__piece-sentence">Choose a challenging passage lasting no more than three measures. Give it a short description so you can find it faster. </p>

    <div class="form__piece-inputs">
    <input type="text" list="piece-list" id="piece" placeholder="Piece" value="Concerto for Trumpet" />
    <datalist id="piece-datalist">
      <option value="Symphony"></option>
    </datalist>
    <input list="composer-list" value="Haydn"type="text" placeholder="Composer" id="composer" />
    <datalist id="composer-datalist">
      <option value="Bach"></option>
      <option value="Beethoven"></option>
      <option value="Mahler"></option>
    </datalist>
 
    <input
      id="measure-numbers"
      type="text"
      placeholder="Measures"
      value="103-105"
    />
    <input
      type="text"
      id="excerpt-description"
      value="Wide intervals in recap"
      placeholder='"Arpeggios on line 3"'
    />
  </div>

    <h5 class="form__plan-title">Now Let's Make a Plan.</h5>

      <p class="form__plan-inputs">To achieve mastery at my goal tempo of 
        <input id="goal-tempo" type="number" placeholder="" value="144" min="30" max="230" />
      bpm , I will start at half tempo, increasing it by 
        <input id="tempo-increase" type="number" value="4" min="1" max="10" />
      bpm after playing it correctly 
        <input id="repetitions" type="number" value="3" min="1" max="6" /> times in a row.  <button id="new-piece-btn" class="new-piece-btn" type="submit">Add Plan </button></p>

  

   
    `;
    this._form.insertAdjacentHTML("afterbegin", markupExperiment);
  };
}

export default new Form();

{
  /* <input id="starting-tempo" type="number" placeholder="Start" min="30" max="220" />
<input id="goal-tempo" type="number" placeholder="Goal" min="30" max="220" />

<input id="repetitions" type="number" placeholder="Repetitions" min="1" max="6" />

<input id="tempo-increase" type="number" placeholder="Increase" min="1" max="10" /> */
}
