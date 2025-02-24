/* eslint-disable react/prop-types */
export default function TrekCard({ trek }) {
  return (
    <div className="trekCard">
      <div className="max-w-md mx-auto m-3  min-w-[300px] font-[font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif]">
        <div className="trek-card bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={trek.image} alt="" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3
              className="text-xl  mb-4 mt-2 flex-wrap"
              style={{ fontWeight: "600", color: "#172b53" }}
            >
              {trek.title}
            </h3>
            {/* Trek title*/}
            <div className="flex items-center m-2 gap-2">
              <span className="font-bold">Location:</span>
              <span className="text-gray-600">{trek.region}</span>
            </div>
            <div className="flex items-center mb-2 m-2 gap-2">
              <span className="font-bold">Duration:</span>
              <span className="text-gray-600">{trek.duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold ms-2">$ {trek.price}</span>{" "}
              {/* Price */}
              <button
                className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition m-2"
                style={{ borderRadius: "15px" }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
