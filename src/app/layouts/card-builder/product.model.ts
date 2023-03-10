export class ProductModel {
    title: string;
    description: string;
    description2: string;

    constructor(title: string, description2: string, description: string){
        this.description =description;
        this.description2 = description2;
        this.title = title;
    }
}