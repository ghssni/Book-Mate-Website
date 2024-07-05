document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', searchBooks);

    function searchBooks(event) {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const bookCards = document.querySelectorAll('.book-card');

        bookCards.forEach(card => {
            const title = card.querySelector('.title-book').textContent.toLowerCase();
            const author = card.querySelector('.author').textContent.toLowerCase();

            if (title.includes(searchInput) || author.includes(searchInput)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
