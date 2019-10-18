// See https://cameronjs.com/stimulus for more info

import { Controller } from "stimulus";

const DEPLOY_DAYS = [1, 2, 3, 4];

export default class extends Controller {
  static get targets() {
    return ["yes", "no", "alwaysYes"];
  }

  connect() {
    if (!this.shouldDeployToday) {
      this.yesTarget.classList.add("hidden");
      this.noTarget.classList.remove("hidden");
    }
  }

  mipsy(event) {
    event.preventDefault();
    this.noTarget.classList.add("hidden");
    this.alwaysYesTarget.classList.remove("hidden");
  }

  get shouldDeployToday() {
    return DEPLOY_DAYS.indexOf(new Date().getDay()) !== -1;
  }
}
