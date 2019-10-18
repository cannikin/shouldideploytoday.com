// See https://cameronjs.com/stimulus for more info

import { Controller } from "stimulus";

export default class extends Controller {
  static get targets() {
    return ["yes", "no", "alwaysYes"];
  }

  connect() {
    const today = new Date().getDay();

    if (today == 5) {
      this.yesTarget.classList.add("hidden");
      this.noTarget.classList.remove("hidden");
    }
  }

  mipsy(event) {
    event.preventDefault();
    this.noTarget.classList.add("hidden");
    this.alwaysYesTarget.classList.remove("hidden");
  }
}
