// https://github.com/alii/website/blob/master/src/util/time.ts
// thank you ali <3

const bday = new Date("28 November 2001 00:12:00 GMT");
const ageMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;
