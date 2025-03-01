/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PlusCircle, MinusCircle, Upload, Mountain } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import "../Styles/TrekForm.css";
import { toast } from "react-toastify";
import axios from "axios";

const AddTrek = () => {
  const [formData, setFormData] = useState({
    trek: "",
    region: "",
    duration: "",
    difficulty: "Easy",
    price: 0,
    description: "",
  });

  const [error, setError] = useState("");

  const [previewImage, setPreviewImage] = useState(null);

  const [image, setImage] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const [fileName, setFileName] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData.trek || !formData.region || !formData.duration) {
      setError("All fields are required");
      return;
    }

    if (formData.price <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    if (formData.duration < 1 || formData.duration > 30) {
      setError("Duration must be between 1 and 30 days");
      return;
    }

    try {
      let imageUrl = "";
      const token = localStorage.getItem("token");
      console.log(token);

      if (!token) {
        toast.error("Unauthorized: No token found");
        return;
      }

      if (selectedFile) {
        const data = new FormData();
        data.append("file", selectedFile);

        const uploadResponse = await axios.post(
          "http://localhost:5000/api/file/upload",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Upload Response:", uploadResponse.data);
        imageUrl = "http://localhost:5000/" + uploadResponse.data.file.path;

        setImage(imageUrl);
        if (!imageUrl) {
          throw new Error("File URL is missing from response");
        }
      }
      const response = await axios.post(
        "http://localhost:5000/api/addTrek",
        {
          title: formData.trek,
          region: formData.region,
          duration: formData.duration,
          difficulty: formData.difficulty,
          price: formData.price,
          description: formData.description,
          image: imageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Trek added successfully!");
      console.log("Trek added", response);
      setFormData({
        trek: "",
        region: "",
        duration: "",
        difficulty: "Easy",
        price: 0,
        description: "",
      });
      setSelectedFile(null);
      setFileName("");
      setPreviewImage(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
            <div className="section">
              {error && (
                <p className="text-red-600 font-semibold text-xl">{error}</p>
              )}
              <h2 className="section-title">Basic Information</h2>
              <div className="section-grid">
                <div className="input-group">
                  <label className="input-label">Trek Name*</label>
                  <input
                    type="text"
                    name="trek"
                    value={formData.trek}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g., Mount Everest Base Camp Trek"
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Region*</label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g., Nepal, Himalayas"
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Duration</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="14 (days)"
                    min={0}
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Difficulty</label>
                  <select
                    name="difficulty"
                    className="input-field"
                    value={formData.difficulty}
                    onChange={handleChange}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Moderate"> Moderate</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Price (USD)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="in USD"
                min={0}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Description:</label>
              <TextareaAutosize
                name="description"
                className="input-field"
                value={formData.description}
                onChange={handleChange}
                placeholder="This is a sample description. Replace with your trek's detailed description."
                minRows={3}
                maxRows={5}
              />
            </div>

            <div className="section">
              <h2 className="section-title">Trek Images</h2>
              <div className="upload-box">
                <Upload className="upload-icon" />
                <div className="upload-text">
                  <label htmlFor="file-upload" className="upload-label">
                    <span>Upload trek images</span>
                    <input
                      onChange={handleImageUpload}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
              </div>
              {previewImage && (
                <div className="image-preview-container">
                  <img
                    src={previewImage}
                    alt="Trek Preview"
                    className="image-preview"
                  />
                </div>
              )}
            </div>

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
