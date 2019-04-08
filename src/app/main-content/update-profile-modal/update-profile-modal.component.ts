import { Component, HostBinding, OnInit } from '@angular/core';
import { UpdateProfileModalService } from '../../services/update-profile-modal/update-profile-modal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'update-profile-modal',
  template: require('./update-profile-modal.component.html'),
  styles: [require('./update-profile-modal.component.scss')]
})
export class UpdateProfileModalComponent implements OnInit {
  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private updateProfileModalService: UpdateProfileModalService, private httpClient: HttpClient) {}

  countries: any = [];
  selectedCountry: Object = {
    name: '',
    flag: '',
    alpha2Code: '',
    alpha3Code: '',
    callingCodes: [],
    currencies: [
      {
        code: '',
        name: '',
        symbol: ''
      }
    ],
    timezones: []
  };

  ngOnInit() {
    this.updateProfileModalService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    this.getCountriesData();
  }

  onClose() {
    this.updateProfileModalService.toggle();
  }

  getCountriesData() {
    this.httpClient.get('https://restcountries.eu/rest/v2/all').subscribe(res => {
      console.log(res);
      this.countries = res;
      this.selectedCountry = this.countries[0];
    });
  }

  onCountrySelect(countryAlpha3Code: any) {
    console.log('onCountrySelect');
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].alpha3Code === countryAlpha3Code) {
        this.selectedCountry = this.countries[i];
        console.log(`selectedCountry: ${this.selectedCountry}`);
      }
    }
  }
}
