// Photo Gallery functionality for Charulatha's website

document.addEventListener('DOMContentLoaded', function() {
    loadPhotos();
    initPhotoGalleryEffects();
});

// Load photos from assets folder
async function loadPhotos() {
    const photoContainer = document.getElementById('photoScroll');
    if (!photoContainer) return;
    
    // List of photo filenames (updated to use actual images from assets/photos folder)
    const photoFilenames = [
        'IMG_0127.PNG',
        'IMG_6475.JPG',
        'IMG_7725.JPG',
        'IMG_7827.PNG',
        'IMG_8054.JPG',
        'IMG_8249.JPG',
        'IMG_8931.PNG',
        'IMG_9399.JPG',
        'IMG_9487.PNG'
    ];

    // Photo descriptions
    const photoDescriptions = [
        'Concert Hall Performance',
        'Veena Practice Session',
        'Teaching Students',
        'Music Festival',
        'Recording Session',
        'Live Concert',
        'Masterclass Workshop',
        'Cultural Event',
        'Stage Performance',
        'Studio Session',
        'Backstage Moment',
        'Award Ceremony',
        'Rehearsal Time',
        'Sunset Concert',
        'With Students'
    ];

    // Create photo items
    photoFilenames.forEach((filename, index) => {
        const photoItem = createPhotoItem(filename, photoDescriptions[index]);
        photoContainer.appendChild(photoItem);
    });

    // Duplicate photos for seamless scrolling
    photoFilenames.forEach((filename, index) => {
        const photoItem = createPhotoItem(filename, photoDescriptions[index]);
        photoContainer.appendChild(photoItem);
    });

    // Initialize photo loading with lazy loading
    initLazyLoading();
}

// Create individual photo item
function createPhotoItem(filename, description) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    
    // Create a protected image structure
    photoItem.innerHTML = `
        <div class="image-container" style="position: relative; overflow: hidden; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: var(--light-bg);">
            <div class="loading-spinner" style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: var(--primary-color);
                font-size: 2rem;
                z-index: 1;
            ">📸</div>
            <img src="assets/photos/${filename}" 
                 alt="${description}" 
                 loading="lazy"
                 draggable="false"
                 oncontextmenu="return false;"
                 onselectstart="return false;"
                 ondragstart="return false;"
                 style="
                    width: 100%; 
                    height: 100%; 
                    object-fit: cover; 
                    object-position: center;
                    user-select: none; 
                    -webkit-user-select: none; 
                    -moz-user-select: none; 
                    -ms-user-select: none; 
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                 "
                 onload="this.style.opacity='1'; this.parentElement.querySelector('.loading-spinner').style.display='none';"
                 onerror="handleImageError(this);">
            <div class="image-overlay" style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: transparent;
                z-index: 5;
                pointer-events: auto;
            "></div>
        </div>
        <div class="photo-placeholder" style="display: none;">
            📸 ${description}
        </div>
        <div class="photo-overlay">
            <p>${description}</p>
        </div>
    `;
    
    // Add additional protection to the photo item
    photoItem.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    photoItem.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    return photoItem;
}

// Handle image loading errors
function handleImageError(img) {
    const container = img.parentElement;
    const spinner = container.querySelector('.loading-spinner');
    
    // Hide the broken image and spinner
    img.style.display = 'none';
    if (spinner) spinner.style.display = 'none';
    
    // Show a styled error message
    container.innerHTML = `
        <div style="
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--light-bg);
            color: var(--text-color);
            text-align: center;
            padding: 20px;
        ">
            <div style="font-size: 3rem; margin-bottom: 10px; opacity: 0.5;">📸</div>
            <div style="font-size: 0.9rem; opacity: 0.7;">Image not found</div>
        </div>
    `;
}

// Initialize lazy loading for better performance
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('.photo-item img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize photo gallery effects
function initPhotoGalleryEffects() {
    const photoScroll = document.querySelector('.photo-scroll');
    if (!photoScroll) return;

    // Pause animation on hover
    photoScroll.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });

    photoScroll.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });

    // Add click handlers for photo items
    document.querySelectorAll('.photo-item').forEach(item => {
        item.addEventListener('click', function() {
            openPhotoModal(this);
        });

        // Add touch support for mobile
        item.addEventListener('touchstart', function() {
            this.classList.add('touched');
        });

        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touched');
            }, 300);
        });
    });

    // Initialize photo modal functionality
    initPhotoModal();
}

// Open photo in modal
function openPhotoModal(photoItem) {
    const img = photoItem.querySelector('img');
    const description = photoItem.querySelector('.photo-overlay p').textContent;
    
    if (img.style.display === 'none') return; // Don't open modal for placeholder images
    
    createPhotoModal(img.src, img.alt, description);
}

// Create photo modal
function createPhotoModal(imageSrc, imageAlt, description) {
    // Check if modal already exists
    const existingModal = document.querySelector('.photo-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="${imageSrc}" alt="${imageAlt}" class="modal-image">
            <div class="modal-description">
                <p>${description}</p>
            </div>
        </div>
    `;

    // Add modal styles
    Object.assign(modal.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });

    // Style modal backdrop
    const backdrop = modal.querySelector('.modal-backdrop');
    Object.assign(backdrop.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
        cursor: 'pointer'
    });

    // Style modal content
    const content = modal.querySelector('.modal-content');
    Object.assign(content.style, {
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    });

    // Style modal image
    const modalImg = modal.querySelector('.modal-image');
    Object.assign(modalImg.style, {
        maxWidth: '100%',
        maxHeight: '70vh',
        objectFit: 'contain'
    });

    // Style close button
    const closeBtn = modal.querySelector('.modal-close');
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '10px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '30px',
        color: '#8b4513',
        cursor: 'pointer',
        zIndex: '1'
    });

    // Style description
    const modalDesc = modal.querySelector('.modal-description');
    Object.assign(modalDesc.style, {
        padding: '20px',
        textAlign: 'center',
        color: '#8b4513',
        fontSize: '1.2rem',
        fontFamily: 'Dancing Script, cursive'
    });

    document.body.appendChild(modal);

    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);

    // Close modal functionality
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialize photo modal
function initPhotoModal() {
    // Prevent body scroll when modal is open
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('photo-modal')) {
            document.body.style.overflow = 'hidden';
        }
    });
}

// Utility function to check if image exists
async function checkImageExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Add swipe support for mobile gallery
function initSwipeSupport() {
    let startX = 0;
    let startY = 0;
    
    const photoScroll = document.querySelector('.photo-scroll');
    if (!photoScroll) return;
    
    photoScroll.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    photoScroll.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const diffX = e.touches[0].clientX - startX;
        const diffY = e.touches[0].clientY - startY;
        
        if (Math.abs(diffX) > Math.abs(diffY)) {
            e.preventDefault(); // Prevent vertical scrolling
        }
    });
}

// Initialize swipe support
document.addEventListener('DOMContentLoaded', function() {
    initSwipeSupport();
});