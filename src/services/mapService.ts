import { mockPlaces } from "../data/mockPlaces";
import { mockHiddenGemQueue } from "../data/mockHiddenGemQueue";

export function getPlaces() {

    return [

        ...mockPlaces,

        ...mockHiddenGemQueue,

    ];

}