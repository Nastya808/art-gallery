import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artwork {
  id: number;
  title: string;
  author: string;
  year: number;
  dimensions: string;
  location: string;
  imageUrl: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl = '/assets/artworks.json'; 

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl);
  }
}
