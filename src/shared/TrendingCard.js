function TrendingCard({ name, description }) {
    return (
      <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-gray-600 mt-2">{description}</div>
      </div>
    );
  }
export default TrendingCard;