const articles = document.querySelectorAll('.article');
const itemsPerPage = 4; // Number of articles per page
const pagination = document.getElementById('pagination');

function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    articles.forEach((article, index) => {
        if (index >= startIndex && index < endIndex) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createPagination() {
    const pageCount = Math.ceil(articles.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(i);
            // Add active class to the clicked page link
            const paginationLinks = document.querySelectorAll('.pagination a');
            paginationLinks.forEach((pageLink) => {
                pageLink.classList.remove('active');
            });
            link.classList.add('active');
        });

        listItem.appendChild(link);
        pagination.appendChild(listItem);
    }
}

showPage(1);
createPagination();