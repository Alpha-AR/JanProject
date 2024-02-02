import { developer , lawyer , accountant , paytm , uber , ola , blu , rapido  } from '../assets/images';

export const cardJSON = [
    {
        jobLogo: developer,
        companyLogo: paytm,
        companyName: "PAYTM",
        jobTitle: "Backend Dev",
        salary: 99,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare ",

    },
    {
        jobLogo: accountant,
        companyLogo: ola,
        companyName: "OLA",
        jobTitle: "Accountant",
        salary: 18,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare "
    },
    {
        jobLogo: lawyer,
        companyLogo: uber,
        companyName: "UBER",
        jobTitle: "Lawyer",
        salary: 56,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare"
    },
    {
        jobLogo: developer,
        companyLogo: rapido,
        companyName: "RAPIDO",
        jobTitle: "Frontend Dev",
        salary: 57,
        jobDesc: "Lorem ipsum dolor sit amet et delectus"
    },
    {
        jobLogo: lawyer,
        companyLogo: blu,
        companyName: "BLU",
        jobTitle: "Lawyer",
        salary: 34,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare"
    },
    {
        jobLogo: developer,
        companyLogo: paytm,
        companyName: "PAYTM",
        jobTitle: "Backend Dev",
        salary: 75,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare"
    },
    {
        jobLogo: accountant,
        companyLogo: ola,
        companyName: "OLA",
        jobTitle: "Accountant",
        salary: 43,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare"
    },
    {
        jobLogo: developer,
        companyLogo: uber,
        companyName: "UBER",
        jobTitle: "Dev Ops",
        salary: 42,
        jobDesc: "Lorem ipsum dolor sit amet et delectus accommodare"
    }
]
export const CRED = [
    {
        name: 'Aarnav',
        email: 'aarnav.rastogi@ongrid.in',
        password: '110011',
        gender: 'M'
    },
]
export const CHOICES = [
    { value: 'NamAsc', label: 'Name↓' },
    { value: 'NamDesc', label: 'Name↑' },
    { value: 'PayAsc', label: 'Pay↓' },
    { value: 'PayDesc', label: 'Pay↑' },
];

export const COMPANIESOPTIONS = [
    { value: 'OLA', label: 'Ola' },
    { value: 'UBER', label: 'Uber' },
    { value: 'PAYTM', label: 'Paytm' },
    { value: 'RAPIDO', label: 'Rapido' },
    { value: 'BLU', label: 'Blu' },
];

export const PAYRANGEOPTIONS = [
    { value1: 0, value2: 5, label: '₹0 - ₹5L/Yr' },
    { value1: 5, value2: 20, label: '₹5L/Yr - ₹20L/Yr' },
    { value1: 20, value2: 40, label: '₹20L/Yr - ₹40L/Yr' },
    { value1: 40, value2: 99, label: '₹40L/Yr - ₹99L/Yr' }
];