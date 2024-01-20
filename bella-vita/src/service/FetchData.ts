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
        return await axios.get<Array<ICareerType>>("/careers_list/");
    }

    async getFabrics() {
        return await axios.get<Array<IFabricType>>("/fabrics_list/")
    }

    async getGallery() {
        return await axios.get<Array<IGalleryType>>("/galery_list/")
    }

    async getAccessory() {
        return await axios.get<Array<IAccessoryType>>("/accessories_list/")
    }

    async getAccessoryCategory() {
        return await axios.get<Array<IAccessoryCategoryType>>("/accessories_categories/")
    }

    async getDressType() {
        return await axios.get<Array<IAccessoryTypesType>>("/dress_types/")
    }

    async getDress() {
        return await axios.get<Array<IAccessoryType>>("/dress_list/")
    }

    async getDressCategory() {
        return await axios.get<Array<IAccessoryCategoryType>>("/dress_category/")
    }

    async getAccessoryType() {
        return await axios.get<Array<IAccessoryTypesType>>("/accessories_types/")
    }

}

export default new FetchData();