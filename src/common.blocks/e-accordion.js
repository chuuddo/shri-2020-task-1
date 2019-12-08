export default function(e) {
  const short = e.target.closest(".e-accordion__short");
  if (short) {
    const accordion = short.closest(".e-accordion");
    const more = accordion.getElementsByClassName("e-accordion__more")[0];
    more.classList.toggle("e-accordion__more_view_default");
  }
}
