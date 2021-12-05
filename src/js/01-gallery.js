// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


console.log(galleryItems);

const gallery = document.querySelector('.gallery');

createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
    const markup = galleryItems
        .map(item =>
            `
            <a class="gallery__item"
                href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                    
                />
            </a>
        `
        )
        .join(" ");

    gallery.innerHTML = markup;
};


const galleryModal = new SimpleLightbox('.gallery a');

galleryModal.on("show.simplelightbox", function () {
    galleryModal.options.captionDelay = 250;
    galleryModal.options.captionsData = 'alt';
});
