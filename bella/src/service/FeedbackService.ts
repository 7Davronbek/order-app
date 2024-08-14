import axios from "axios";
import IFeedbackType from "../types/IFeedbackType.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {TOKEN, CHAT_ID} from "@/constants"

class FeedbackService {
    async feedback(data: IFeedbackType, type: string) {
        const text = `${type}%0A____________________________________%0A%0AName: ${data.name}.%0APhone number: ${data.phoneNumber}.`;

        return await axios.post(
            `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
        )
    }
}

export default new FeedbackService();