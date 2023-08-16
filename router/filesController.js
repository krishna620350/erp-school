import { schoolControllerObject } from "../controller/controllerSchool.js";
import { classControllerObject } from "../controller/controllerClass.js";
import data from "../json/data.json" assert {type: "json"}

export const controller = {
    router: data.routers,
    collection: data.collectionName,
    schoolControllerObject,
    classControllerObject
};
// console.log(controller.registration.welcome);