// 06 Dynamic Import
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
