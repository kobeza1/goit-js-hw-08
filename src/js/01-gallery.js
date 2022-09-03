import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRootEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(item => {
    return `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src= "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}" />
  </a>`;
  })
  .join('');

galleryRootEl.insertAdjacentHTML('afterbegin', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  docClose: false,
});
