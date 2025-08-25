
function openFilteredModal(contentId) {
    document.querySelectorAll('#filtered-review-tip-content > div').forEach((div) => {
        div.style.display = 'none';
    });

    if (contentId) {
        const selectedContent = document.getElementById(`review-tip-2022-g3_3-${contentId}`);
        if (selectedContent) selectedContent.style.display = 'block';
    }

    $('#modal-2022-g3_3').modal('show');
}

// Delegate the trigger click in case triggers are added later
document.addEventListener('click', (e) => {
    const link = e.target.closest('.modal-2022-g3_3-trigger');
    if (!link) return;
    e.preventDefault();
    const contentId = link.getAttribute('data-content-id');
    if (!contentId) {
        console.warn('Missing data-content-id on trigger');
        return;
    }
    openFilteredModal(contentId);
});

// Save/restore scroll position via delegated modal events (works even if modal is injected later)
const pageWrapper = document.getElementById('page-content');
let scrollTop = 0;

$(document).on('show.bs.modal', '#modal-2022-g3_3', function () {
  // Capture the window scroll and freeze the wrapper at that spot
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (pageWrapper) {
    pageWrapper.style.top = `-${scrollTop}px`;
    pageWrapper.classList.add('freeze-scroll');
  }
});

$(document).on('hidden.bs.modal', '#modal-2022-g3_3', function () {
  // Unfreeze and restore scroll
  if (pageWrapper) {
    pageWrapper.classList.remove('freeze-scroll');
    pageWrapper.style.top = '';
  }
  window.scrollTo(0, scrollTop);
});