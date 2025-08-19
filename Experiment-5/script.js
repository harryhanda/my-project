document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const productItems = document.querySelectorAll('.product-item');

    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;

        productItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (selectedCategory === 'all' || selectedCategory === itemCategory) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});