// const serieExemple = [
//   {
//     id: "demo-1",
//     name: "Les Explorateurs",
//     language: "French",
//     genres: ["Adventure", "Drama"],
//     status: "Running",
//     image: null
//   },
//   {
//     id: "demo-2",
//     name: "Les Explorateurs",
//     language: "French",
//     genres: ["Adventure", "Drama"],
//     status: "Running",
//     image: null
//   }
// ];

const catalogue = document.querySelector('#catalogue');

function creeCard(serie) {
  const article = document.createElement('article');
  article.className = "cards  bg-zinc-900 border border-zinc-800 rounded-xl"
  const img = document.createElement('img');
  img.className = "w-full h-40 object-cover rounded-t-xl"

  if (serie.image) {
    img.src = serie.image.original;
  } else {
    img.src = "/JS/image/image.png";
  }
  img.alt = serie.name;
  article.appendChild(img)

  const div = document.createElement('div')
  div.className = "card p-4"
  const h3 = document.createElement('h3');
  h3.className = "font-bold"
  h3.textContent = serie.name;
  div.appendChild(h3);

  const divG = document.createElement('div');
  divG.className = "flex gap-2 mt-2";

  serie.genres.forEach((e) => {
    const span = document.createElement('span');
    span.className = "text-xs px-1 bg-zinc-500  text-zinc-300 border-zinc-300 rounded-md";
    span.textContent = e;
    divG.appendChild(span);
  });
  div.appendChild(divG);

  const p = document.createElement('p')
  p.className = 'text-xs text-zinc-300 mt-2'
  p.textContent = serie.summary.slice(4,50)+".";
  div.appendChild(p);

  article.appendChild(div);

  return article;

}