export default interface IAccessoryType {
  id: number;
  dress_size: string;
  price: number;
  product_code: string;
  product_images: IProductImageType[];
  sub_category: ISubcategoryType;
}

export interface IProductImageType {
  id: number;
  image: string;
}

export interface ISubcategoryType {
  id: number;
  name: string;
}
