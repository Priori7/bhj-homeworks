document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        valueElement.addEventListener('click', function(event) {
            event.stopPropagation();
            listElement.classList.toggle('dropdown__list_active');
        });

        const items = dropdown.querySelectorAll('.dropdown__link');
        items.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                const selectedValue = this.textContent;
                valueElement.textContent = selectedValue;
                listElement.classList.remove('dropdown__list_active');

                const parentDropdown = this.closest('.dropdown');
                console.log(parentDropdown); 
            });
        });
    });
});