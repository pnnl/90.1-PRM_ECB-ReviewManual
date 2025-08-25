// Initialize the filters object
const filters = {
    path: ['ECB', 'PRM'],
    version: ['2016', '2019', '2022'],
    model: ['B', 'P'],
    checkType: ['All'],
    component: ['All'],
    bemTool: ['All'],
};

$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var fullImageUrl = button.data('full');
    var modal = $(this);
    modal.find('#modalImage').attr('src', fullImageUrl);
});

document.addEventListener("DOMContentLoaded", function() {
    // Load sidebar
    fetch('../components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
        applyActiveLink();
        applyCollapseState();
        applyScrollState();
    });

    // Load header
    fetch('../components/header-checks.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        populateComponents();
        $('.selectpicker').selectpicker();
        attachEventListeners();
        populateLinks();
        filterContent();
        attachSearchInputListener();
        replaceAnchorLinks();
    });

    // Load footer
    fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });

    // Load 90.1-2022 Appendix G3.3 content
    fetch('../components/2022-g3_3-checks.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('2022-g3_3-modal-container').innerHTML = data;
    });
});

function attachEventListeners() {
    // Save checkbox selections to localStorage
    document.querySelectorAll(".form-check-input").forEach((checkbox) => {
        checkbox.addEventListener("change", saveFilterSelections);
    });

    // Save dropdown selections to localStorage
    document.querySelectorAll(".selectpicker").forEach((select) => {
        select.addEventListener("change", saveFilterSelections);
    });

    document.querySelectorAll(".form-check-input").forEach((checkbox) => {
        const filterType = checkbox.name; // Get the filter type (e.g., "path", "version", "model")
        const savedValue = localStorage.getItem(checkbox.id);
        const value = checkbox.value;
        // Restore checked state from localStorage
        if (savedValue !== null) {
            checkbox.checked = savedValue === "true";
        }

        // Initialize filters based on the restored checkbox state
        if (checkbox.checked) {
            if (!filters[filterType].includes(value)) {
                filters[filterType].push(value);
            }
        } else {
            filters[filterType] = filters[filterType].filter((v) => v !== value);
        }

        // Add an event listener for each checkbox to handle changes
        checkbox.addEventListener("change", function () {
            const checked = checkbox.checked;

            if (checked) {
                filters[filterType].push(value);
            } else {
                filters[filterType] = filters[filterType].filter((v) => v !== value);
            }
            localStorage.setItem(checkbox.id, checked);
            filterContent();
        });
    });

    document.querySelectorAll(".selectpicker").forEach((select) => {
        const filterType = select.name; // Get filter type (e.g., "checkType", "component", "bemTool")
        const savedValues = JSON.parse(localStorage.getItem(select.id));
        if (Array.isArray(savedValues)) {
            let selectedValues = savedValues.includes("All") ? ["All"] : savedValues;
            $(select).selectpicker('val', selectedValues);
            filters[filterType] = selectedValues;
        }

        select.addEventListener('change', function(event) {
            const selectOptions = Array.from(event.target.options);
            const allOption = selectOptions.find(option => option.value === "All");
            let selectedValues = Array.from(event.target.selectedOptions).map(option => option.value);

            // Handle "All" option selection logic
            if (filters[filterType].includes("All") && allOption.selected) {
                allOption.selected = false;
                $('.selectpicker').selectpicker('refresh');
                selectedValues = selectedValues.filter(option => option !== "All");
            } else if (filters[filterType].includes("All") && !allOption.selected) {
                allOption.selected = true;
                $('.selectpicker').selectpicker('refresh');
                selectedValues = ["All"];
            } else if (!filters[filterType].includes("All") && allOption.selected) {
                selectOptions.forEach(option => {
                    if (option.value !== "All") {
                        option.selected = false;
                    }
                });
                $('.selectpicker').selectpicker('refresh');
                selectedValues = ["All"];
            }

            // Check if no options are selected, then select "All"
            if (selectedValues.length === 0) {
                allOption.selected = true;
                $('.selectpicker').selectpicker('refresh');
                selectedValues = ["All"];
            }

            // Update filter object and localStorage
            filters[filterType] = selectedValues.filter(option => option !== "All" || selectedValues.length === 1);
            localStorage.setItem(select.id, JSON.stringify(filters[filterType]));
            filterContent();
        });
    });

    enforceAtLeastOneChecked("path");
    enforceAtLeastOneChecked("version");
    enforceAtLeastOneChecked("model");
}

function populateLinks() {
    const filterLinks = document.getElementById('filter-links');

    filterLinks.innerHTML = '';

    const cards = document.querySelectorAll('#page-content .card');

    cards.forEach(card => {
        const cardId = card.id.toUpperCase();
        const link = document.createElement('a');
        link.textContent = cardId;
        link.href = `#${card.id}`;
        filterLinks.appendChild(link);
    });
}

function populateComponents() {
    const componentSelect = document.getElementById('component-type');
    componentTypes.forEach(function(component, i) {
        const option = document.createElement('option');
        option.value = component;
        option.textContent = labels[i];
        componentSelect.appendChild(option);
    });
}

function attachSearchInputListener() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
}

function replaceAnchorLinks() {
  const pageAnchorLinks = document.querySelectorAll('a[href^="#"]');

  pageAnchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href') || '';
      // Skip empty/hash-only hrefs like "#"
      if (!href || href === '#') return;

      const targetId = href; // starts with '#'
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();

      const header = document.querySelector('#header-container');
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    });
  });

  const externalLinks = document.querySelectorAll("#page-content a[href]:not([href^='#'])");
  externalLinks.forEach(link => { link.setAttribute('target', '_blank'); });

  const contentLinks = document.querySelectorAll("#page-content a[href*='content/']");
  contentLinks.forEach(link => {
    link.addEventListener("click", function() {
      const href = this.getAttribute("href") || '';
      const lastSegment = href.substring(href.lastIndexOf('/') + 1);
      localStorage.setItem("activeLink", lastSegment);
    });
  });
}

window.onscroll = function() {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.opacity = "1";
        backToTopButton.style.visibility = "visible";
    } else {
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function applyActiveLink() {
    const sidebarLinks = document.querySelectorAll("#sidebar-container a");

    // Get the stored active link from localStorage
    const activeLink = localStorage.getItem("activeLink");

    // If an active link is stored, find it and set the active class
    if (activeLink) {
        const currentActive = document.querySelector(`#sidebar-container a[href*='${activeLink}']`);
        if (currentActive) currentActive.classList.add("active");
    }

    // Add click event to each link to store the clicked link's href
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Get the href and store only the substring after the last '/' character
            const href = this.getAttribute("href");
            const lastSegment = href.substring(href.lastIndexOf('/') + 1);
            localStorage.setItem("activeLink", lastSegment);
        });
    });
}

function applyCollapseState() {
    const sidebar = document.querySelector("#sidebar");
    const collapsibleButtons = document.querySelectorAll("#sidebar-container .btn-toggle");

    // Restore saved collapse states from localStorage
    collapsibleButtons.forEach(button => {
        const targetId = button.getAttribute("data-target");
        const section = document.querySelector(targetId);
        const isExpanded = localStorage.getItem(`collapseState-${targetId}`);

        // Apply saved state if available
        if (isExpanded === "true") {
            section.classList.add("show"); // Expand section
            button.setAttribute("aria-expanded", "true");
        } else {
            section.classList.remove("show"); // Collapse section
            button.setAttribute("aria-expanded", "false");
        }

        // Add event listeners to update state in localStorage when toggled
        button.addEventListener("click", () => {
            const expanded = button.getAttribute("aria-expanded") === "true";
            localStorage.setItem(`collapseState-${targetId}`, !expanded);
            const scrollPosition = sidebar.scrollTop;
            localStorage.setItem("sidebarScrollPosition", scrollPosition);
        });
    });
}

function applyScrollState() {
    const sidebar = document.querySelector("#sidebar");

    // Restore the saved scroll position on load
    const savedScrollTop = localStorage.getItem("sidebarScrollPosition");
    if (savedScrollTop) {
        sidebar.scrollTop = parseInt(savedScrollTop, 10);
    }

    // Save the scroll position whenever it changes
    sidebar.addEventListener("scroll", () => {
        localStorage.setItem("sidebarScrollPosition", sidebar.scrollTop);
    });
}

function enforceAtLeastOneChecked(groupName) {
    const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function(event) {
            const checkedCheckboxes = document.querySelectorAll(`input[name="${groupName}"]:checked`);

            // If there is only one checkbox checked in the group and it is being unchecked, prevent it
            if (checkedCheckboxes.length === 0) {
                this.checked = true;
            }
        }, { capture: true }); // Use capture phase to take priority
    });
}
