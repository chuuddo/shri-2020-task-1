const templater = require("../../lib/templater");
const json = require("./index.json");

const content = templater(json);
document.body.insertAdjacentHTML("afterbegin", content);
