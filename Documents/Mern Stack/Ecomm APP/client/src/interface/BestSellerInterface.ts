export interface Main {
  success:               boolean;
  count:                 number;
  message:               string;
  allBestSellerProducts: AllBestSellerProduct[];
}

export interface AllBestSellerProduct {
  _id:         string;
  productName: string;
  price:       string;
  description: string;
  photo:       string;
  category:    string;
  createdAt:   Date;
  updatedAt:   Date;
  __v:         number;
}
