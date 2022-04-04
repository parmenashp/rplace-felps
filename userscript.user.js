// ==UserScript==
// @name         r/Place Felps Overlay
// @namespace    https://github.com/mitsuaky/rplace-felps
// @version      1.0.1
// @description  Um overlay para ajudar a desenhar a carinha do felps no r/place
// @author       github.com/mitsuaky
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
      document
        .getElementsByTagName("mona-lisa-embed")[0]
        .shadowRoot
        .children[0]
        .getElementsByTagName("mona-lisa-canvas")[0]
        .shadowRoot
        .children[0]
        .appendChild(
          (function () {
              const img = document.createElement("img");
              img.src = "https://github.com/mitsuaky/rplace-felps/raw/main/carinha.png";
              img.style = "position: absolute;left: 1648px;top: 1918px;image-rendering: pixelated;width: 31px;height: 20px;";
              console.log(img);
              return img;
          })())
  }, false);
}
