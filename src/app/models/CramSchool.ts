import {Address} from "./Address";

export class CramSchool {
    uuid: string;
    name: string;
    address: Address;
    businessHour: string;
    description: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.name = data.name;
        this.address = data.address;
        this.businessHour = data.businessHour;
        this.description = data.description;
    }
}
