import data from "../json/data.json" assert {type: "json"}
import { validateSchoolData } from "../model/schemaRegistration.js";
import { validateClassData } from "../model/classValidation.js";
import { schoolObject } from "../database/dataSchool.js";
import { classObject } from "../database/dataClass.js";
import { sendMail } from "../mail/sendMail.js";

export const dataFile = {
    saltRound: data.numberOfRounds,
    schoolObject,
    validateSchoolData,
    classObject,
    validateClassData,
    sendMail
}