const auth = "563492ad6f91700001000001f4cb313b13924ff0aae9e987862236a8"
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");

const form = document.querySelector(".search-form");
let searchValue;

async function curatedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15&page=1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );

  const data = await dataFetch.json();
  console.log(data);

  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img> <p>${photo.photographer}</p>`;
    gallery.appendChild(galleryImg);
  });
}

curatedPhotos();
