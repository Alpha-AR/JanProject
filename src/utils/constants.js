import { developer, lawyer, accountant, paytm, uber, ola, blu, rapido } from "../assets/images";

export const CARD_JSON = [
   {
      jobLogo: accountant,
      companyLogo: paytm,
      companyName: "PAYTM",
      jobTitle: "Accountant",
      salary: 99,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare ",
   },
   {
      jobLogo: accountant,
      companyLogo: ola,
      companyName: "OLA",
      jobTitle: "Accountant",
      salary: 18,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare ",
   },
   {
      jobLogo: lawyer,
      companyLogo: uber,
      companyName: "UBER",
      jobTitle: "Lawyer",
      salary: 56,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare",
   },
   {
      jobLogo: developer,
      companyLogo: rapido,
      companyName: "RAPIDO",
      jobTitle: "Frontend Dev",
      salary: 57,
      jobDesc: "Lorem ipsum dolor sit amet et delectus",
   },
   {
      jobLogo: lawyer,
      companyLogo: blu,
      companyName: "BLU",
      jobTitle: "Lawyer",
      salary: 34,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare",
   },
   {
      jobLogo: developer,
      companyLogo: paytm,
      companyName: "PAYTM",
      jobTitle: "Backend Dev",
      salary: 75,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare",
   },
   {
      jobLogo: developer,
      companyLogo: ola,
      companyName: "OLA",
      jobTitle: "Backend dev",
      salary: 43,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare",
   },
   {
      jobLogo: developer,
      companyLogo: uber,
      companyName: "UBER",
      jobTitle: "Dev Ops",
      salary: 42,
      jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare",
   },
];
export const SORT_OPTIONS = [
   { value: "NamAsc", label: "Company ↓", type: "company" },
   { value: "NamDesc", label: "Company ↑", type: "company" },
   { value: "JobAsc", label: "Job ↓", type: "Job" },
   { value: "JobDesc", label: "Job ↑", type: "Job" },
   { value: "PayAsc", label: "Pay ↓", type: "Pay" },
   { value: "PayDesc", label: "Pay ↑", type: "Pay" },
];

export const COMPANIES_OPTIONS = [
   { value: "OLA", label: "Ola" },
   { value: "UBER", label: "Uber" },
   { value: "PAYTM", label: "Paytm" },
   { value: "RAPIDO", label: "Rapido" },
   { value: "BLU", label: "Blu" },
];

export const PAY_RANGE_LIST = [
   { value1: 0, value2: 5, label: "₹0 - ₹5L/Yr" },
   { value1: 5, value2: 20, label: "₹5L/Yr - ₹20L/Yr" },
   { value1: 20, value2: 40, label: "₹20L/Yr - ₹40L/Yr" },
   { value1: 40, value2: 99, label: "₹40L/Yr - ₹99L/Yr" },
];

export const genderOptions = [
   { value: "NA", label: "Prefer Not to Say" },
   { value: "M", label: "Male" },
   { value: "F", label: "Female" },
   { value: "T", label: "TransGender" },
   { value: "O", label: "Other" },
];
