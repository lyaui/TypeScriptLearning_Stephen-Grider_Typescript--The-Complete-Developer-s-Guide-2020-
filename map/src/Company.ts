import * as faker from 'faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
  companyName: string;
  catchPhrase: string;
  location: { lat: number; lng: number };
  color: string = 'pink';
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>CatchPhrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
