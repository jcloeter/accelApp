class Navigation {
  //Goal of this function is to clear the hash on page load
  //Current prob is that old hash is not a valid id in prList
  addHandlerInitHash() {
    window.addEventListener("load", function () {
      if (!window.location.href.includes("#")) return;
      const baseUrl = window.location.href.split("#")[0];
      window.location.replace(baseUrl);
    });
  }
}

export default new Navigation();
