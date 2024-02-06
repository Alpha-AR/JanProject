import toast from "react-hot-toast";

export const customToast = (message, type) => {
   switch (type) {
      case "casual":
         toast(message, {
            style: {
               background: "#A4F3FC",
               color: "black",
            },
         });
         break;
      case "alert":
         toast(message, {
            style: {
               background: "#ef4444",
               color: "white",
            },
         });
         break;
   }
};


export const sortCards = (cards, sortCriteria) => {
   switch (sortCriteria) {
      case "NamAsc":
         return cards.sort((a, b) => a.companyName.localeCompare(b.companyName));
      case "NamDesc":
         return cards.sort((a, b) => b.companyName.localeCompare(a.companyName));
      case "JobAsc":
         return cards.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
      case "JobDesc":
         return cards.sort((a, b) => b.jobTitle.localeCompare(a.jobTitle));
      case "PayAsc":
         return cards.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
      case "PayDesc":
         return cards.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));

      default:
         return cards;
   }
};
