// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import axios from "@/config";
import ICareerType from "../types/ICareerType.ts";
import IFabricType from "../types/IFabricType.ts";
import IGalleryType from "../types/IGalleryType.ts";
import IAccessoryType from "../types/IAccessoryType.ts";
import IAccessoryCategoryType from "../types/IAccessoryCategoryType.ts";
import IAccessoryTypesType from "../types/IAccessoryTypesType.ts";

class FetchData {
    async getCareers() {
        return await axios.get<Array<ICareerType>>("/vacancy/");
    }

    async getFabrics() {
        return await axios.get<Array<IFabricType>>("/for-dress/")
    }

    async getGallery() {
        return await axios.get<Array<IGalleryType>>("/gallery/")
    }

    async getAccessory(categoryId: string) {
        return await axios.get<Array<IAccessoryType>>(`/product/?category=${categoryId}`)
    }

    async getAccessoryCategory() {
        return await axios.get<Array<IAccessoryCategoryType>>("/category/")
    }

    async getAccessoryType() {
        return await axios.get<Array<IAccessoryTypesType>>("/subcategory/")
    }

}

export default new FetchData();