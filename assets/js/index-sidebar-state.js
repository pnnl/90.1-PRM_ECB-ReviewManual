document.addEventListener("DOMContentLoaded", function() {
    applyActiveLink();
    applyCollapseState();
    applyScrollState();
});

// Function to handle active link styling
function applyActiveLink() {
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    // Retrieve the stored active link from localStorage
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
    const collapsibleButtons = document.querySelectorAll("#sidebar .btn-toggle");

    // Restore saved collapse states from localStorage
    collapsibleButtons.forEach(button => {
        const targetId = button.getAttribute("data-bs-target");
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
        const scrollPosition = sidebar.scrollTop;
        localStorage.setItem("sidebarScrollPosition", scrollPosition);
    });
}
