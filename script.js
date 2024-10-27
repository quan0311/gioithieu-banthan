document.getElementById('introButton').addEventListener('click', function() {
    const intro = document.getElementById('intro');
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        this.textContent = 'Ẩn giới thiệu';
    } else {
        intro.style.display = 'none';
        this.textContent = 'Xem giới thiệu';
    }
});
