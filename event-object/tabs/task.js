const tabs = document.getElementsByClassName('tab');
const tabContents = document.getElementsByClassName('tab__content');

function switchTab(index) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab_active');
        tabContents[i].classList.remove('tab__content_active');
    }
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        switchTab(i);
    });
}

switchTab(0);