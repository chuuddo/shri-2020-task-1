const templater = require("../templater");
const json = require("./index.json");
let content = templater(json);
document.body.insertAdjacentHTML("afterbegin", content);
