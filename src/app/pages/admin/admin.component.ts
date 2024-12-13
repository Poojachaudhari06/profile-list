import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profiles: any[] = [];
  profileForm: FormGroup;
  selectedProfile: any = null;

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      interests: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      if (this.selectedProfile) {
        // Update profile
        this.profileService.updateProfile(this.selectedProfile.id, this.profileForm.value).subscribe(() => {
          this.loadProfiles();
          this.resetForm();
        });
      } else {
        // Add new profile
        this.profileService.addProfile(this.profileForm.value).subscribe(() => {
          this.loadProfiles();
          this.resetForm();
        });
      }
    }
  }

  resetForm(): void {
    this.profileForm.reset();
    this.selectedProfile = null;
  }

  editProfile(profile: any): void {
    this.selectedProfile = profile;
    this.profileForm.patchValue(profile);
  }

  deleteProfile(id: number): void {
    if (confirm('Are you sure you want to delete this profile?')) {
      this.profileService.deleteProfile(id).subscribe(() => {
        this.loadProfiles();
      });
    }
  }
}
