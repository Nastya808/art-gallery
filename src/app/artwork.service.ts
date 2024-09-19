import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private artworks = [
      {
        id: 1,
        title: 'Starry Night',
        author: 'Vincent van Gogh',
        year: 1889,
        dimensions: '73.7 cm × 92.1 cm',
        location: 'Museum of Modern Art, New York City',
        imageUrl: '/images/starry-night.jpg',
        thumbnailUrl: '/images/starry-night.jpg'
      },
      {
        id: 2,
        title: 'Mona Lisa',
        author: 'Leonardo da Vinci',
        year: 1503,
        dimensions: '77 cm × 53 cm',
        location: 'Louvre Museum, Paris',
        imageUrl: '/images/mona-lisa.jpg', 
        thumbnailUrl: '/images/mona-lisa.jpg'
      },
      {
        id: 3,
        title: 'The Persistence of Memory',
        author: 'Salvador Dalí',
        year: 1931,
        dimensions: '24 cm × 33 cm',
        location: 'Museum of Modern Art, New York City',
        imageUrl: '/images/persistence-of-memory.jpg',
        thumbnailUrl: '/images/persistence-of-memory.jpg'
      },
      {
        id: 4,
        title: 'The Scream',
        author: 'Edvard Munch',
        year: 1893,
        dimensions: '91 cm × 73.5 cm',
        location: 'National Gallery, Oslo',
        imageUrl: '/images/the-scream.jpg',
        thumbnailUrl: '/images/the-scream.jpg'
      },
      {
        id: 5,
        title: 'Girl with a Pearl Earring',
        author: 'Johannes Vermeer',
        year: 1665,
        dimensions: '44.5 cm × 39 cm',
        location: 'Mauritshuis, The Hague',
        imageUrl: '/images/girl-with-a-pearl-earring.jpg',
        thumbnailUrl: '/images/girl-with-a-pearl-earring.jpg'
      },
      {
        id: 6,
        title: 'The Birth of Venus',
        author: 'Sandro Botticelli',
        year: 1485,
        dimensions: '172.5 cm × 278.9 cm',
        location: 'Uffizi Gallery, Florence',
        imageUrl: '/images/the-birth-of-venus.jpg',
        thumbnailUrl: '/images/the-birth-of-venus.jpg'
      },
      {
        id: 7,
        title: 'The Night Watch',
        author: 'Rembrandt van Rijn',
        year: 1642,
        dimensions: '363 cm × 437 cm',
        location: 'Rijksmuseum, Amsterdam',
        imageUrl: '/images/the-night-watch.jpg',
        thumbnailUrl: '/images/the-night-watch.jpg'
      }
  ];

  getArtworks() {
    return this.artworks;
  }

  getArtworkById(id: number) {
    return this.artworks.find(artwork => artwork.id === id);
  }
}
