import data from '../json/data.json' assert {type: 'json'};
import { store } from '../database/config.js';
export const dataFile = {
    school: data.collectionName.school,
    store
}