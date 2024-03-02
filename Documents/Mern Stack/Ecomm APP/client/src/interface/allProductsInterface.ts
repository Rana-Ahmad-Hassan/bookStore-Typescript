export interface AllProductsInterface {
    success: boolean;
    count: number;
    message: string;
    products: Product[];
  }
  
  export interface Product {
    _id: string;
    category: string;
    productName: string;
    price: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    photo?: Photo;
  }
  
  export interface Photo {
    type: string;
    data: number[];
  }