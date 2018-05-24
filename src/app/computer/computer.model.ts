import { Company } from '../company/company.model';

export class Computer {
  id: number;
  name: string;
  introduced: string;
  discontinued: string;
  companyDTO: Company;
}
