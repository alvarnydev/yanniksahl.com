export const updateGridElements = () => {
  const workGrid = document.querySelector("#work-grid")!;
  const gridElements = workGrid.querySelectorAll("li");

  // Hide all
  gridElements.forEach((element) => {
    element.classList.add("hidden");
  });

  // Update visibility
  gridElements.forEach((element) => {
    element.classList.remove("hidden");
    const style = getComputedStyle(element);
    if (style.display === "none") {
      element.classList.remove("visible");
    } else {
      element.classList.add("visible");
    }
  });

  // Update offset
  const visibleElements = workGrid.querySelectorAll("li.visible");
  visibleElements.forEach((element, index) => {
    if (index % 2 === 1) {
      element.classList.add("offset");
    } else {
      element.classList.remove("offset");
    }
  });
};
