import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Artwork, ArtworkService } from './artwork.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HttpClientModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArtworkService] 
})
export class AppComponent implements OnInit {
  title = 'Art Gallery'; 
  artworks: Artwork[] = [];
  selectedArtwork: Artwork | null = null;

  constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.artworkService.getArtworks().subscribe((data) => {
      this.artworks = data;
    });
  }

  selectArtwork(artwork: Artwork): void {
    this.selectedArtwork = artwork;
  }

  clearSelection(): void {
    this.selectedArtwork = null;
  }

  onSelect(artwork: any) {
    this.selectedArtwork = artwork; 
  }
}
