!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in l){var r=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},e.parcelRequired7c6=r);var a,o,n,u=r("1WSnx"),i=document.querySelector(".feedback-form"),d=document.querySelector("input"),f=document.querySelector("textarea"),s="feedback-form-state";i.addEventListener("input",(0,u.throttle)((function(e){""===d.value&&""===f.value||(a={email:d.value,message:f.value},o=JSON.stringify(a),localStorage.setItem(s,o))}),500));var c=localStorage.getItem(s);try{n=JSON.parse(c),""!==c&&(d.value=n.email,f.value=n.message)}catch(e){console.error(e.message)}i.addEventListener("submit",(function(e){if(e.preventDefault(),""===d.value||""===f.value)return alert("Please fill in all fields!");console.log(n),localStorage.removeItem(s),d.value="",f.value=""}))}();
//# sourceMappingURL=03-feedback.25dc799d.js.map
