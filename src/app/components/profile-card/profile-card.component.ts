import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() profile: any;
  @Output() viewOnMap = new EventEmitter<any>();

  onViewOnMap(): void {
    this.viewOnMap.emit(this.profile);
  }
}
