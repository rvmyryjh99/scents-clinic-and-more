// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// ---------- PRODUCTS PAGE GALLERY ----------
// Only run on products.html
if (document.getElementById('perfume-gallery')) {
    // Configuration: Adjust these arrays to match your actual file names.
    // For perfumes: 37 images. Name them perfume1.jpeg to perfume37.jpeg
    const perfumeCount = 37;
    const perfumeImages = Array.from({ length: perfumeCount }, (_, i) => `assets/images/perfumes/perfume${i+1}.jpeg`);

    // Oil perfumes: 3 images (oil1.jpeg, oil2.jpeg, oil3.jpeg)
    const oilImages = [
        'assets/images/oil-perfumes/oil1.jpeg',
        'assets/images/oil-perfumes/oil2.jpeg',
        'assets/images/oil-perfumes/oil3.jpeg'
    ];

    // Jewelry & Cosmetics: 6 sample images (replace with your own)
    // You can add more by extending the array.
    const jewelryImages = [
        'assets/images/jewelry/jew1.jpeg',
        'assets/images/jewelry/jew2.jpeg',
        'assets/images/jewelry/jew3.jpeg',
        'assets/images/jewelry/jew4.jpeg',
        'assets/images/jewelry/jew5.jpeg',
        'assets/images/jewelry/jew6.jpeg'
    ];

    // Videos: 3 videos (video1.mp4, video2.mp4, video3.mp4)
    const videos = [
        'assets/videos/video1.mp4',
        'assets/videos/video2.mp4',
        'assets/videos/video3.mp4'
    ];

    // Function to populate gallery
    function populateGallery(containerId, items, type = 'image') {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        items.forEach(item => {
            if (type === 'image') {
                const img = document.createElement('img');
                img.src = item;
                img.alt = 'Product';
                // Optional: add lightbox effect
                img.addEventListener('click', () => {
                    window.open(item, '_blank');
                });
                container.appendChild(img);
            } else if (type === 'video') {
                const video = document.createElement('video');
                video.src = item;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.controls = true;
                video.style.maxWidth = '100%';
                container.appendChild(video);
            }
        });
    }

    populateGallery('perfume-gallery', perfumeImages, 'image');
    populateGallery('oil-gallery', oilImages, 'image');
    populateGallery('jewelry-gallery', jewelryImages, 'image');
    populateGallery('video-gallery', videos, 'video');
}