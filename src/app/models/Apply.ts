import { Address } from './Address';
import {Question} from "./Question";

export class Apply {
  uuid: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  questions: Question[];
  active: boolean;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
    this.questions = data.questions;
    this.active = data.active;
  }
}

