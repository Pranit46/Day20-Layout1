async function getAnime() {
  const data = await fetch("https://api.jikan.moe/v3/anime/1/news");
  let anime = await data.json();
  console.log(anime);

  const searchResults = document.querySelector(".wrapper");
  searchResults.innerHTML = anime.articles.map((ele) => {
    return `
        
        <div class="card">
        <img class="card-img-top" src="${ele.image_url}" >
        <div class="info">
                <h3>${ele.title}</h3>
                <p>${ele.intro}</p>
                <a href="${ele.url}" target="_blank" class="btn">Read More</a>
        </div>
        </div>
    `;
  });
}
getAnime();


