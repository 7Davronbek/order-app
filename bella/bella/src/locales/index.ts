// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {LANGUAGE} from "@/constants"
import {uz} from "./UZ.ts";
import {tr} from "./TR.ts";
import {ru} from "./RU.ts";
import {en} from "./EN.ts";

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE)
}

export const getText = (word: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return getLanguage() === "uz" ? uz[word]
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        : getLanguage() === "tr" ? tr[word]
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            : getLanguage() === "en" ? en[word]
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                : ru[word]
}