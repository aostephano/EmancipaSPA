import {Address} from "./Address";

export class CramSchool {
    uuid: string;
    name: string;
    cramSchoolSuffix: string;
    school: string;
    address: Address;
    businessHour: string;
    description: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.name = data.name;
        this.cramSchoolSuffix = data.cramSchoolSuffix;
        this.school = data.school;
        this.address = data.address;
        this.businessHour = data.businessHour;
        this.description = data.description;
    }
}
