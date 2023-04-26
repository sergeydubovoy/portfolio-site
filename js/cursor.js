document.addEventListener("DOMContentLoaded", () => {
  const followCursor = () => {
    const el = document.querySelector(".follow-cursor");

    window.addEventListener("mousemove", (e) => {
      const target = e.target;
      if (!target) return;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input")
      ) {
        el.classList.add("follow-cursor_active");
      } else {
        el.classList.remove("follow-cursor_active");
      }

      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    });
  };

  followCursor();
});
