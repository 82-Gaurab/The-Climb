import { useState } from "react";
import { PlusCircle, MinusCircle, Upload, Mountain } from "lucide-react";

const AddTrek = () => {
  const [itinerary, setItinerary] = useState([{ title: "", description: "" }]);

  const addDay = () => {
    setItinerary([...itinerary, { title: "", description: "" }]);
  };

  const removeDay = (index) => {
    if (itinerary.length > 1) {
      const newItinerary = itinerary.filter((_, i) => i !== index);
      setItinerary(newItinerary);
    }
  };

  const updateItinerary = (index, field, value) => {
    const newItinerary = itinerary.map((day, i) => {
      if (i === index) {
        return { ...day, [field]: value };
      }
      return day;
    });
    setItinerary(newItinerary);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="relative h-48 bg-blue-600">
        <div className="absolute inset-0">
          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Mountain className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Add New Trek</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trek Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Mount Everest Base Camp Trek"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Region*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Nepal, Himalayas"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-4">
                {itinerary.map((day, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Day {index + 1}</h3>
                      {itinerary.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDay(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <MinusCircle className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Title*
                        </label>
                        <input
                          type="text"
                          required
                          value={day.title}
                          onChange={(e) =>
                            updateItinerary(index, "title", e.target.value)
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Arrival in Kathmandu"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addDay}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <PlusCircle className="h-5 w-5 mr-2" /> Add Another Day
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">
                Trek Images
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                    >
                      <span>Upload trek images</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    PNG, JPG, GIF up to 10MB each
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Add Trek
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrek;
