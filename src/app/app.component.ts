import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkService } from './artwork.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [CommonModule] 
})
export class AppComponent {
  title = 'Картинная галерея';
  artworks: any[] = [];
  selectedArtwork: any = null;

  constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.artworks = this.artworkService.getArtworks();
  }

  onSelect(artwork: any): void {
    this.selectedArtwork = artwork;
  }
}
