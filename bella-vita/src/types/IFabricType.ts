export default interface IFabricType {
    id: number,
    name: string,
    description: string,
    price: number,
    for_dress_images: IForDressImageType[]
}

export interface IForDressImageType {
    id: number,
    image: string
}