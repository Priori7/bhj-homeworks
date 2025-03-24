document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    const elementsWithTooltip = document.querySelectorAll('.has-tooltip');

    elementsWithTooltip.forEach(element => { 
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const toolTipText = element.getAttribute('title'); 
            tooltip.textContent = toolTipText;
            tooltip.classList.add('tooltip_active');

            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('has-tooltip')) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});