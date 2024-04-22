export class Item {
    id?: number;
    name: string;
    quantity: number;
    shelvingLevel: number;
    shelvingNumber: number;
    isInsideBox: boolean;
    comment: string;
  
    constructor(
      name: string,
      quantity: number,
      shelvingLevel: number,
      shelvingNumber: number,
      isInsideBox: boolean,
      comment: string
    ) {
      this.name = name;
      this.quantity = quantity;
      this.shelvingLevel = shelvingLevel;
      this.shelvingNumber = shelvingNumber;
      this.isInsideBox = isInsideBox;
      this.comment = comment;
    }
  }
  