// Mengambil elemen hamburger, menu, dan tombol close
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const closeBtn = document.getElementById('close-btn');

// Menambahkan event listener untuk hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');  // Menambahkan/menyembunyikan animasi hamburger
    navList.classList.toggle('show');  // Menampilkan atau menyembunyikan menu
});

let currentIndex = 0;
let slideInterval;

// Fungsi untuk mengganti gambar saat tombol prev/next diklik
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    document.querySelector('.slider').style.transform = `translateX(${-currentIndex * 500}px)`;
    updateDots();
}

// Fungsi untuk memilih gambar tertentu berdasarkan klik penanda
function currentSlide(index) {
    currentIndex = index - 1;  // Menyesuaikan index karena dot dimulai dari 1
    document.querySelector('.slider').style.transform = `translateX(${-currentIndex * 500}px)`;
    updateDots();
}

// Fungsi untuk memperbarui status penanda
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Fungsi untuk menggeser gambar otomatis setiap 5 detik
function autoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);  // Menggeser gambar ke arah selanjutnya
    }, 5000);  // Interval 5000ms atau 5 detik
}

// Mulai slide otomatis ketika halaman dimuat
window.onload = function() {
    autoSlide();
};