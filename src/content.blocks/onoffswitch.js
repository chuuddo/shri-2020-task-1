export default function(e) {
  const onoffswitch = e.target.closest(".onoffswitch");
  if (onoffswitch) {
    onoffswitch.classList.toggle("onoffswitch_checked");
    const selectors = ".theme_color_project-default,.theme_color_project-inverse";
    const elements = document.querySelectorAll(selectors);
    Array.from(elements).forEach(element => {
      element.classList.toggle("theme_color_project-default");
      element.classList.toggle("theme_color_project-inverse");
    });
  }
}
