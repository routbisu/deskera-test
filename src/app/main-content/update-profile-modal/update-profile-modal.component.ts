import { Component, HostBinding, OnInit } from '@angular/core';
import { UpdateProfileModalService } from '../../services/update-profile-modal/update-profile-modal.service';

@Component({
  selector: 'update-profile-modal',
  template: require('./update-profile-modal.component.html'),
  styles: [require('./update-profile-modal.component.scss')]
})
export class UpdateProfileModalComponent implements OnInit {
  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private updateProfileModalService: UpdateProfileModalService) {}

  ngOnInit() {
    this.updateProfileModalService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  onClose() {
    this.updateProfileModalService.toggle();
  }
}
