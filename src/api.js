const LATENCY = 1000;

const BOOKS = [
  {
    title: 'React 16 Essentials',
    author: 'Artemij Fedosejev',
    imgURL:
      'https://d3bxy9euw4e147.cloudfront.net/oscms-dev/media/documents/prealgebra_1.svg',
  },
  {
    title: 'Getting Started with React VR',
    author: 'John Gwinner',
    imgURL:
      'https://d3bxy9euw4e147.cloudfront.net/oscms-dev/media/documents/prealgebra_1.svg',
  },
  {
    title: 'React Native Blueprints',
    author: 'Emilio Rodriguez Martinez',
    imgURL:
      'https://d3bxy9euw4e147.cloudfront.net/oscms-dev/media/documents/prealgebra_1.svg',
  },
  {
    title: 'React Design Patterns and Best Practices',
    author: 'Michele Bertoli',
    imgURL:
      'https://d3bxy9euw4e147.cloudfront.net/oscms-dev/media/documents/prealgebra_1.svg',
  },
  {
    title: 'React Native Cookbook',
    author: 'Crysfel Villa, Stan Bershadskiy',
    imgURL:
      'https://d3bxy9euw4e147.cloudfront.net/oscms-dev/media/documents/prealgebra_1.svg',
  },
  {
    title: 'React Native By Example',
    author: 'Richard Kho',
    imgURL:
      'https://d3bxy9euw4e147.cloudfront.net/oscms-dev/media/documents/prealgebra_1.svg',
  },
];

export const fetchBooks = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(BOOKS);
  }, LATENCY);
});

export const createBook = (title, author, imgURL) => new Promise((resolve) => {
  setTimeout(() => {
    BOOKS.push({ title, author, imgURL });
    resolve();
  }, LATENCY);
});

export const fetchBook = (title) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(BOOKS.find((book) => book.title === title));
  }, LATENCY);
});

export const deleteBook = (title) => new Promise((resolve) => {
  setTimeout(() => {
    BOOKS.splice(
      BOOKS.findIndex((b) => b.title === title),
      1,
    );
    resolve();
  }, LATENCY);
});
