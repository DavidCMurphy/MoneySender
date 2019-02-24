import { FormInput } from "./FormInputComponent";
import { currency } from "../App";

const nonEmpty = (value?: String): boolean =>
  value !== undefined && value.length > 0;

const validateEmail = (email?: string): boolean => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email ? re.test(email) : false;
};

const nonEmptyNumber = (number?: string): boolean =>
  number ? /^-{0,1}\d+$/.test(number) : false;

export const nameForm = (): FormInput => ({
  title: "Name",
  key: "name",
  errorString: "Please enter a valid name",
  validation: nonEmpty
});

export const emailForm = (): FormInput => ({
  title: "Email Address",
  key: "email",
  errorString: "Please enter a valid email address",
  validation: validateEmail
});

export const amountForm = (): FormInput => ({
  title: "Amount",
  key: "amount",
  errorString: "Please enter a valid amount",
  validation: nonEmptyNumber,
  prefix: currency
});
