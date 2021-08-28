class Form {
  _form = document.getElementById("new-piece-form");

  addHandlerFormSubmit = function (callback) {
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("I heard a new piece was created!");
      callback(e);
    });
  };
}

export default new Form();
