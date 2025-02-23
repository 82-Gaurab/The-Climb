import { useState } from "react";
import { PlusCircle, MinusCircle, Upload, Mountain } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import "../Styles/TrekForm.css";

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
    <div className="trek-form-container">
      <div className="trek-header">
        <div className="trek-header-content">
          <div className="trek-header-icon">
            <Mountain className="icon" />
          </div>
          <h1 className="trek-title">Add New Trek</h1>
        </div>
      </div>

      <div className="trek-form-wrapper">
        <div className="trek-form-card">
          <form onSubmit={handleSubmit} className="trek-form">
            {/* Basic Information */}
            <div className="section">
              <h2 className="section-title">Basic Information</h2>
              <div className="section-grid">
                <div className="input-group">
                  <label className="input-label">Trek Name*</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="e.g., Mount Everest Base Camp Trek"
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Region*</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="e.g., Nepal, Himalayas"
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Duration</label>
                  <input
                    type="number"
                    required
                    className="input-field"
                    placeholder="14 (days)"
                    min={0}
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Difficulty</label>
                  <select className="input-field">
                    <option>Easy</option>
                    <option>Moderate</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="section">
              <h2 className="section-title">Day-by-Day Itinerary</h2>
              <div className="itinerary-list">
                {itinerary.map((day, index) => (
                  <div key={index} className="itinerary-item">
                    <div className="itinerary-header">
                      <h3 className="itinerary-title">Day {index + 1}</h3>
                      {itinerary.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDay(index)}
                          className="remove-day-btn"
                        >
                          <MinusCircle className="icon-sm" />
                        </button>
                      )}
                    </div>
                    <div className="input-group">
                      <label className="input-label">Title*</label>
                      <input
                        type="text"
                        required
                        value={day.title}
                        onChange={(e) =>
                          updateItinerary(index, "title", e.target.value)
                        }
                        className="input-field"
                        placeholder="e.g., Arrival in Kathmandu"
                      />
                    </div>

                    <div className="input-group">
                      <label className="input-label">Description</label>
                      <TextareaAutosize
                        className="input-field"
                        placeholder="Arrive in Kathmandu, transfer to hotel, and trek briefing"
                        minRows={3}
                        maxRows={5}
                      />
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addDay} className="add-day-btn">
                  <PlusCircle className="icon-sm" /> Add Another Day
                </button>
              </div>
            </div>

            {/* Trek Images */}
            <div className="section">
              <h2 className="section-title">Trek Images</h2>
              <div className="upload-box">
                <Upload className="upload-icon" />
                <div className="upload-text">
                  <label htmlFor="file-upload" className="upload-label">
                    <span>Upload trek images</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                  <p>or drag and drop</p>
                </div>
                <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-btn">
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
