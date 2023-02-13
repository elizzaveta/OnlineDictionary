import {GET} from "./rest/GET";

export default async function GetWordDefinition(word) {
    return GET(word);
}