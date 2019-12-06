const templater = require("../../lib/templater");
const json = require("./product.json");

const content = templater(json);
document.body.insertAdjacentHTML("afterbegin", content);
