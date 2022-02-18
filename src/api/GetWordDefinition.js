import {GET} from "./rest/GET";

export default async function GetWordDefinition(word) {
    console.log("here");
    return GET(word);
}