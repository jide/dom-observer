/**
 * index.js - dom-observer module
 */

(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        domObserver = definition();
    }
})(function () {
    return function () {
        return "this is module dom-observer";
    };
});
