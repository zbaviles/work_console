document.addEventListener("DOMContentLoaded", () => {
      const navToggle = document.getElementById("check");
      const navToggleLabel = document.querySelector('label[for="check"]');
      const menu = document.getElementById("primary-menu");

      if (!navToggle || !navToggleLabel) {
            return;
      }

      const syncExpanded = () => {
            const expanded = navToggle.checked;
            navToggle.setAttribute("aria-expanded", String(expanded));
            navToggleLabel.setAttribute("aria-expanded", String(expanded));
      };

      syncExpanded();
      navToggle.addEventListener("change", syncExpanded);

      navToggleLabel.addEventListener("keydown", (event) => {
            if (event.key === " " || event.key === "Enter") {
                  event.preventDefault();
                  navToggle.checked = !navToggle.checked;
                  syncExpanded();
            }
      });

      document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && navToggle.checked) {
                  navToggle.checked = false;
                  syncExpanded();
                  navToggleLabel.focus();
            }
      });

      if (menu) {
            const links = menu.querySelectorAll("a");
            links.forEach((link) => {
                  link.addEventListener("click", () => {
                        if (navToggle.checked) {
                              navToggle.checked = false;
                              syncExpanded();
                        }
                  });
            });
      }
});
