export class Item {
    id?: number;
    name: string;
    quantity: number;
    shelvingLevel: number;
    shelvingNumber: number;
    location: string;
    comment: string;
  
    constructor(
      name: string,
      quantity: number,
      shelvingLevel: number,
      shelvingNumber: number,
      location: string,
      comment: string
    ) {
      this.name = name;
      this.quantity = quantity;
      this.shelvingLevel = shelvingLevel;
      this.shelvingNumber = shelvingNumber;
      this.location = location;
      this.comment = comment;
    }
  }
  