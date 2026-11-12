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

const compteur = document.querySelector('.afficher span');
const recherche=document.querySelector('#rech')
const filtreGenre=document.querySelector('#gen')
const btnReset = document.querySelector('#reset')
const formulaire=document.querySelector('#form-ajout')
const erreurNom= document.querySelector('#err-nom')
 const erreurGenre=document.querySelector('#err-genre')

let series=[];

 function extraireGenres(liste) {
  const genresUniques = [];
  liste.forEach((serie)=>{
    (serie.genres).forEach((genre)=>{
      if (!genresUniques.includes(genre)){
        genresUniques.push(genre)
      }
    })
  })
  return genresUniques;
}
 function remplirGenres(genres) {
  if (!filtreGenre) return;
  filtreGenre.innerHTML = '';

  const optTous = document.createElement('option');
  optTous.value = '';
  optTous.textContent = 'Tous les genres';
  filtreGenre.appendChild(optTous);

  genres.forEach((g) => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    filtreGenre.appendChild(opt);
  });
}

function actualiserCatalogue() {
  const textR = recherche.value.trim().toLowerCase();
  const genreChoisi = filtreGenre.value;

  const resultats = series.filter((serie) => {
    const nom = (serie.name || "").toLowerCase();
    const genres = serie.genres || [];
    const Nom = nom.includes(textR);
    const Genre = genreChoisi === "" || genres.includes(genreChoisi);
    return Nom && Genre;
  });

  afficherSeries(resultats);
}

function afficherSeries(liste) {

    catalogue.replaceChildren(); 
    if (liste.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'Aucune série à afficher';
    p.className = 'text-zinc-300 p-4';
    catalogue.appendChild(p);
    if (compteur) 
      compteur.textContent = 0;
    return;
  }
  let cpt=0;
for (let i = 0; i < liste.length; i++) {
  if (i >= 20) {

    break; 
  }
  catalogue.appendChild(creeCard(liste[i]));
cpt++;
}
 compteur.textContent = cpt;
  
}
recherche.addEventListener('input', actualiserCatalogue);
filtreGenre.addEventListener('change', actualiserCatalogue);
btnReset.addEventListener('click', () => {
  recherche.value = '';
  filtreGenre.value = '';
  actualiserCatalogue();
});

const api="https://api.tvmaze.com/shows?page=0"
fetch(api)
  .then(ele => ele.json())
  .then(data => {
    if (catalogue) {
      series = data;
      const genres = extraireGenres(series);
      remplirGenres(genres);
      actualiserCatalogue();
    }
    console.log(data);
  });