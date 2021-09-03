class HeaderViews {
  _quote = document.querySelector(".header__quote");
  _headerPar = document.querySelector(".header");
  _navbar = document.querySelector(".navbar");

  update() {
    this.clear();
    this._generateQuoteMarkup();
  }

  clear() {
    this._quote.innerHTML = "";
  }

  _generateQuoteMarkup() {
    const markup = `
    <p class="header__quote-text">If you learn something slowly you forget it slowly; if you learn something very quickly you forget it immediately.</p>
    <div class="header__quote-author">
      <p class="header__quote-name">Itzhak Perlman</p>
      <p class="header__quote-position">International Violin Soloist</p>
    </div>
      `;
    this._quote.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new HeaderViews();
