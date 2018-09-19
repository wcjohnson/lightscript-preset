"use strict";

var x = true ? function (e) {
  throw e;
}(new Error()) : void 0;