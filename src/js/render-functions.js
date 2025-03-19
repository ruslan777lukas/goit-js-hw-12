export function imageTemplate(item) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = item;

  return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="gallery-wrapper">
            <ul class="gallery-group">
              <li class="gallery-list">
                <p class="gallery-subtitle">Likes</p>
                <p class="gallery-txt">${likes}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Views</p>
                <p class="gallery-txt">${views}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Comments</p>
                <p class="gallery-txt">${comments}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Downloads</p>
                <p class="gallery-txt">${downloads}</p>
              </li>
            </ul>
          </div>
        </li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}
