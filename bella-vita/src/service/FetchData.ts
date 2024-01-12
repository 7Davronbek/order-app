// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import axios from "@/config";
import ICareerType from "../types/ICareerType.ts";
import IFabricType from "../types/IFabricType.ts";
import IGalleryType from "../types/IGalleryType.ts";

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
}

export default new FetchData();