document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.querySelector('.blog-search__input');
    const articleSection = document.querySelector('.blog-grid').parentElement;
    const poemSection = document.querySelector('.portfolio').parentElement;
    const loadingDots = document.querySelector('.loading-dots');
    
    // Create no results message element
    const createNoResultsMessage = (section) => {
        const existingMessage = section.querySelector('.no-results');
        if (!existingMessage) {
            const message = document.createElement('div');
            message.className = 'no-results';
            message.innerHTML = `
                <p>No ${section === articleSection ? 'articles' : 'poems'} found matching your search.</p>
            `;
            section.insertBefore(message, section.lastElementChild);
        }
    };

    // Remove no results message
    const removeNoResultsMessage = (section) => {
        const message = section.querySelector('.no-results');
        if (message) message.remove();
    };

    // Search functionality
    const performSearch = (searchTerm) => {
        loadingDots.style.display = 'flex';
        
        let articleMatches = false;
        let poemMatches = false;

        // Search articles - maintain original flex display
        articleSection.querySelectorAll('.blog-card').forEach(card => {
            const content = [
                card.querySelector('.blog-card__title').textContent,
                card.querySelector('.blog-card__excerpt').textContent,
                card.querySelector('.meta-item.tag').textContent
            ].join(' ').toLowerCase();
            
            const isVisible = content.includes(searchTerm);
            card.style.display = isVisible ? 'flex' : 'none'; // Changed to flex
            if (isVisible) articleMatches = true;
        });

        // Search poems
        poemSection.querySelectorAll('.card').forEach(card => {
            const content = [
                card.querySelector('h3').textContent,
                card.querySelector('p').textContent
            ].join(' ').toLowerCase();
            
            const isVisible = content.includes(searchTerm);
            card.style.display = isVisible ? 'block' : 'none';
            if (isVisible) poemMatches = true;
        });

        if (searchTerm.length > 0) {
            articleMatches ? removeNoResultsMessage(articleSection) : createNoResultsMessage(articleSection);
            poemMatches ? removeNoResultsMessage(poemSection) : createNoResultsMessage(poemSection);
        } else {
            removeNoResultsMessage(articleSection);
            removeNoResultsMessage(poemSection);
        }

        setTimeout(() => {
            loadingDots.style.display = 'none';
        }, 300);
    };

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        if (searchTerm === '') {
            articleSection.querySelectorAll('.blog-card').forEach(card => card.style.display = 'flex'); // Reset to flex
            poemSection.querySelectorAll('.card').forEach(card => card.style.display = 'block');
            removeNoResultsMessage(articleSection);
            removeNoResultsMessage(poemSection);
            return;
        }
        performSearch(searchTerm);
    });
});