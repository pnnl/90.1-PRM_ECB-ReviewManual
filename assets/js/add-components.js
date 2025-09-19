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
    fetch('../components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        $('.selectpicker').selectpicker();
        attachSearchInputListener();
        replaceAnchorLinks();
    });

    // Load footer
    fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });
});

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
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                const headerHeight = document.querySelector('#header-container').offsetHeight;
                const scrollPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const externalLinks = document.querySelectorAll("#page-content a[href]:not([href^='#'])");

    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });

    const contentLinks = document.querySelectorAll("#page-content a[href*='content/']");
    contentLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Get the href and store only the substring after the last '/' character
            const href = this.getAttribute("href");
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
        const scrollPosition = sidebar.scrollTop;
        localStorage.setItem("sidebarScrollPosition", scrollPosition);
    });
}
