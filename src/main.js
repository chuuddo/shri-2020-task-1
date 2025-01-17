import "./main.scss";
import accordionHandler from "./common.blocks/e-accordion";
import onoffswitchHandler from "./content.blocks/onoffswitch";

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", accordionHandler);
  document.body.addEventListener("click", onoffswitchHandler);
});
