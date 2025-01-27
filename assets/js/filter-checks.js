// Function to filter sections within cards based on selected filters
function filterContent() {

    const cards = document.querySelectorAll('#page-content .card');
    const anchorTags = document.querySelectorAll('#filter-links a');

    cards.forEach((card, index) => {
        const checkType = card.getAttribute('data-check-type')?.split(',').map(item => item.trim()) || [];
        const component = card.getAttribute('data-component')?.split(',').map(item => item.trim()) || [];
        const modelType = card.getAttribute('data-model')?.split(',').map(item => item.trim()) || [];

        const matchesCheckType = filters.checkType[0] === 'All' || checkType.some(type => filters.checkType.includes(type));
        const matchesComponent = filters.component[0] === 'All' || component.some(comp => filters.component.includes(comp));
        const matchesModelType = modelType.some(model => filters.model.includes(model));

        const anchorTag = anchorTags[index];

        if (!matchesCheckType || !matchesComponent || !matchesModelType) {
            card.style.display = 'none';
            anchorTag.classList.add('disabled');
            return; // Skip further filtering if the card is hidden
        } else {
            card.style.display = '';
            anchorTag.classList.remove('disabled'); // Remove the disabled class if the card is shown
        }

        // Now, filter individual sections within the card
        const sections = card.querySelectorAll('div[data-version], div[data-path], div[data-bem-tool]');
        sections.forEach((section) => {
            const version = section.getAttribute('data-version')?.split(',').map(item => item.trim()) || [];
            const path = section.getAttribute('data-path')?.split(',').map(item => item.trim()) || [];
            const bemTool = section.getAttribute('data-bem-tool')?.split(',').map(item => item.trim()) || [];

            // Check if the section matches the filters
            // Treat empty filters arrays as if all options are selected (show everything)
            const matchesPath = path.some(p => filters.path.includes(p)) || path.length === 0;
            const matchesVersion = version.some(v => filters.version.includes(v)) || version.length === 0;
            const matchesBEMTool = filters.bemTool[0] === 'All' || bemTool.some(bem => filters.bemTool.includes(bem)) || bemTool.length === 0;

            // Show or hide the section based on match
            if (!matchesPath || !matchesVersion || !matchesBEMTool) {
                section.style.display = 'none';
            } else {
                section.style.display = '';
            }
        });
    });
}

function saveFilterSelections() {
    document.querySelectorAll(".form-check-input").forEach((checkbox) => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });

    document.querySelectorAll(".selectpicker").forEach((select) => {
        const selectedValues = Array.from(select.options)
            .filter(option => option.selected)
            .map(option => option.value);
        localStorage.setItem(select.id, JSON.stringify(selectedValues));
    });
}
