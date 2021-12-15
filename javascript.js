// Commentaire sur une ligne
/* Commentaire
sur plusieurs
 lignes*/

/*-----------------------------------------------------------------------*/
/* ******* Créer un livre avec des variables (cours 2) ******* */
/*-----------------------------------------------------------------------*/

let book;
let title = "Les Misérables";
let author = "Victor hugo";
let price = 14.95;
let category = "drame";
let releaseDate = new Date("1997, 05, 23");
let nbSales = 345;

/*-----------------------------------------------------------------------*/
/* ******* Créer un livre avec des objets et tableaux (cours 3) ****** */
/*-----------------------------------------------------------------------*/
// Nous avons créé, dans le fichier boo.js, un tableau d'objets avec les livres
console.log('BOOK LIST')
console.log(books)
//Importer un livre .json dans un fichier JS (sans framework) nécessite une opération

// Tableau d’objet pour le panier
let cart = [
  {id: "0", qqt: 1},
  {id: "1", qqt: 1},
];
let totalPrice; // prix total du panier à stocker dans cette variable
/*-----------------------------------------------------------------------*/
/* 3. Conditions (cour 4) */
/*-----------------------------------------------------------------------*/

// Gestion du stock
if (books[0].nbStock === 0) {
  console.log('Rupture de stock')
} else {
  console.log(
    'il en reste ' + books[0].nbStock + ' exemplaires.'
  )
}

// Sortie récentes
if (books[0].releaseDate > books[1].releaseDate) {
  console.log(books[0].title + ' est le plus récent des deux livres')
} else {
  console.log(books[1].title + ' est le plus récent des deux livres')
}

// Les meilleurs ventes
if (books[0].nbSales > books[1].nbSales) {
  console.log(books[0].title + ' a été le plus vendu')
} else {
  console.log(books[1].title + ' a été le plus vendu')
}

// Panier : augmenter la quantitee d'un article
if (cart[1]) { // équivaut à cart[1] === true
  console.log('Quantité avant ajout ' + cart[1].qqt)
  cart[1].qqt++ // on incrémente cart de 1
// est égal à : cart[1].qtt = cart[1] + 1
  console.log('Quantité après ajout ' + cart[1].qqt)
}
