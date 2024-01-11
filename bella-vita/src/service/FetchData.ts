// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import axios from "@/config";
import ICareerType from "../types/Types.ts";

class FetchData {
    async getCareers() {
        return await axios.get<Array<ICareerType>>("/careers_list/");
    }
}

export default new FetchData();