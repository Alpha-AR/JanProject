import TrendingCard from "./TrendingCard";

function CompanyCard({ name, logo }) {
    return (
      <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
        <img src={logo} alt={name} className="w-16 h-16 mb-4" />
        <div className="text-xl font-semibold">{name}</div>
      </div>
    );
  }
  export default TrendingCard;