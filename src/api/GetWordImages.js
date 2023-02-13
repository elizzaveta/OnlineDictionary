import {GET} from "./rest/GET";

export default async function GetWordImages(word) {
    return GET(word);
}