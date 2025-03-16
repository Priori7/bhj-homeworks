const fontSizeElements = document.getElementsByClassName('font-size');
const book = document.getElementById('book');

for (let i = 0; i < fontSizeElements.length; i++) {
    fontSizeElements[i].addEventListener('click', function (event) {
        event.preventDefault();

        
        for (let j = 0; j < fontSizeElements.length; j++) {
            fontSizeElements[j].classList.remove('font-size_active');
        }

        
        this.classList.add('font-size_active');

        
        book.classList.remove('book_fs-small', 'book_fs-big');

        
        if (this.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (this.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
}