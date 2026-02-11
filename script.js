const element = document.getElementById("avoid-cursor");

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Get the element's position and size
  const elementRect = element.getBoundingClientRect();
  const elementX = elementRect.left + elementRect.width / 2;
  const elementY = elementRect.top + elementRect.height / 2;

  const distanceX = mouseX - elementX;
  const distanceY = mouseY - elementY;

  // If the cursor is close to the element, move it away
  if (Math.abs(distanceX) < 150 && Math.abs(distanceY) < 150) {
    const offsetX = mouseX > elementX ? 150 : -150;
    const offsetY = mouseY > elementY ? 150 : -150;

    // Get the window's width and height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Ensure the element stays within the 10px border around the edge
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;

    let newX = mouseX + offsetX;
    let newY = mouseY + offsetY;

    // Restrict the position so the element doesn't go out of bounds
    if (newX + elementWidth > windowWidth - 10) {
      newX = windowWidth - elementWidth - 10;
    }
    if (newX < 10) {
      newX = 10;
    }

    if (newY + elementHeight > windowHeight - 10) {
      newY = windowHeight - elementHeight - 10;
    }
    if (newY < 10) {
      newY = 10;
    }

    // Set the new position of the element
    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
  }
});
