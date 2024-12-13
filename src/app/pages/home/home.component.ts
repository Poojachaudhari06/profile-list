import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles: any[] = [];
  filteredProfiles: any[] = [];
  searchQuery: string = '';
  selectedProfile: any = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
      this.filteredProfiles = data;
    });
  }

  viewOnMap(profile: any): void {
    this.selectedProfile = profile;
  }

  searchProfiles(): void {
    this.filteredProfiles = this.profiles.filter((profile) =>
      profile.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
