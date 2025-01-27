
function openFilteredModal(contentId) {
    document.querySelectorAll('#filtered-review-tip-content > div').forEach((div) => {
        div.style.display = 'none';
    });

    const selectedContent = document.getElementById(`review-tip-2022-g3_3-${contentId}`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    $('#modal-2022-g3_3').modal('show');
}

document.querySelectorAll('.modal-2022-g3_3-trigger').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const contentId = link.getAttribute('data-content-id');
        openFilteredModal(contentId);
    });
});