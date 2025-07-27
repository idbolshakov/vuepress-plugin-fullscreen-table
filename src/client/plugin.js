export const initFullscreenTablePlugin = () => {
  if (
    window.document.readyState === "complete" ||
    window.document.readyState === "loaded"
  ) {
    init();
  } else {
    window.document.addEventListener("DOMContentLoaded", function () {
      init();
    });
  }
};

const init = () => {
  window.document.body.insertAdjacentHTML(
    "beforeend",
    [
      `<dialog class="vuepress-plugin-fullscreen-table-modal">`,
      `  <form method="dialog">`,
      `    <button>close</button>`,
      `  </form>`,
      `      <div data-type="dialog-content"></div>`,
      `</dialog>`,
    ].join(""),
  );
  const dialog = document.body.querySelector(
    ".vuepress-plugin-fullscreen-table-modal",
  );
  const dialogContent = dialog.querySelector('[data-type="dialog-content"]');

  document.body.addEventListener("click", (e) => {
    const target = e.target;

    if (target.dataset.type !== "fullscreen-table") return;

    const wrapper = target.parentElement;

    const table = wrapper.querySelector("table");
    dialogContent.innerHTML = wrapper.querySelector("table").outerHTML;
    dialog.showModal();
  });
};
