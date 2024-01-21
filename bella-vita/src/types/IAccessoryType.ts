export default interface IAccessoryType {
    id: number,
    dress_type: string,
    dress_size: string,
    price: number,
    product_images: IProductImageType[]
}

export interface IProductImageType {
    id: number,
    image: string
}