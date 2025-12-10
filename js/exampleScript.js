function updateDisplay(el) {
  const description = document.querySelector("#product-info p:last-child");

  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    let label = document.querySelector('label[for="' + checkbox.id + '"]');

    if (el !== checkbox) {
      checkbox.checked = false;
      if (label.classList.contains("selected")) {
        label.classList.remove("selected");
      }
    } else {
      el.checked = true;
      if (!label.classList.contains("selected")) {
        label.classList.add("selected");
        const TEXT = el.id.replace("btn", "");
        description.innerHTML = "Description for " + TEXT + " edition";
      }
    }
  });
}

function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  return (
    (regex.test(navigator.userAgent) && "ontouchstart" in window) ||
    navigator.maxTouchPoints > 0
  );
}

if (isMobile()) {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  tooltipTriggerList.forEach((tooltip) => {
    tooltip.style.display = "inline-block";
    tooltip.addEventListener("show.bs.tooltip", (e) => {
      if (tooltip.classList.contains("bi-info-circle")) {
        tooltip.className = tooltip.className.replace(
          "bi-info-circle",
          "bi-info-circle-fill"
        );
      }
    });

    tooltip.addEventListener("hide.bs.tooltip", (e) => {
      if (tooltip.classList.contains("bi-info-circle-fill")) {
        tooltip.className = tooltip.className.replace(
          "bi-info-circle-fill",
          "bi-info-circle"
        );
      }
    });
  });

  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  console.log(tooltipList);
  console.log("Tooltips detected: " + tooltipList.length);
}
