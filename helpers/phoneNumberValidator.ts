import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const validatePhoneNumber = (countryCallingCode : number, phoneNumber : string) => {
  const fullPhoneNumber = `+${countryCallingCode}${phoneNumber}`;
  const phoneNumberObj = parsePhoneNumberFromString(fullPhoneNumber);

  if (!phoneNumberObj) {
    return false;
  }

  return phoneNumberObj.isValid();
};