export interface Payment {
    id: number;
    name: string;
    sellingPrice: number;
    quantity: number;
    inventoryLevel: number;
    total: number;
    transactionDate: string;    
  }