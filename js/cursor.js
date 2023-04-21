document.addEventListener("DOMContentLoaded", () => {
  const followCursor = () => {
    // объявляю функцию followCursor
    const el = document.querySelector(".follow-cursor"); // ищу элемент-кружочек, который будет следовать за курсором

    window.addEventListener("mousemove", (e) => {
      // mousemove - при движении курсора
      const target = e.target; // определяю, где находится курсор
      if (!target) return;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input")
      ) {
        // если курсор наведён на ссылку, кнопку и инпут
        el.classList.add("follow-cursor_active"); // добавляю этому элементу активный класс
      } else {
        // иначе
        el.classList.remove("follow-cursor_active"); // удаляю активный класс
      }

      el.style.left = e.clientX + "px"; // позиционирую
      el.style.top = e.clientY + "px";
    });
  };

  followCursor(); // вызываю функцию followCursor
});
