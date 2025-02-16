/* eslint-disable react/prop-types */
export default function AgencyCard({ agency }) {
  return (
    <div className="max-w-md mx-auto m-3 min-w-[300px] font-[font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif]">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={agency.photo}
          alt={agency.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl mb-4 mt-2 font-semibold text-[#172b53]">
            {agency.name}
          </h3>
        </div>
      </div>
    </div>
  );
}
