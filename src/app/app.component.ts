import {CountryISO} from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import {SearchCountryField} from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';

import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PhoneNumberFormat} from "google-libphonenumber";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.Egypt,
    CountryISO.SaudiArabia,
  ];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
  protected readonly PhoneNumberFormat = PhoneNumberFormat;

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
}
