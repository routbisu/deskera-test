import { Component, HostListener } from '@angular/core';
import { UpdateProfileModalService } from '../../../services/update-profile-modal/update-profile-modal.service';

@Component({
  selector: 'profile-section',
  template: require('./profile-section.component.html'),
  styles: [require('./profile-section.component.scss')]
})
export class ProfileSectionComponent {
  constructor(private updateProfileModalService: UpdateProfileModalService) {}

  @HostListener('click')
  click() {
    this.updateProfileModalService.toggle();
  }
}
