import {GET} from "./rest/GET";

export default async function GetWordImages(word) {
    console.log("here");
    return GET(word);
}