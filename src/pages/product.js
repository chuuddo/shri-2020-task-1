const templater = require("../templater");
const json = require("./product.json");
let content = templater(json);
document.body.insertAdjacentHTML("afterbegin", content);
