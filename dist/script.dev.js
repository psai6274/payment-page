"use strict";

function disableOtherRadios() {
  var radios = document.getElementsByName("option");

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radios[i].disabled = false;
    } else {
      radios[i].disabled = true;
    }
  }
}
//# sourceMappingURL=script.dev.js.map
