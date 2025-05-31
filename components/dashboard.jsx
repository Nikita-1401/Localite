import React, { useState, useRef } from "react";


const Dashboard = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    landmark: "",
    location: "",
    category: "",
    imageUrl: "", // <-- filled right after successful upload
  });

  const fileInputRef = useRef(null);

  // ---------------------------------------------
  // Generic handler for all text / select inputs
  // ---------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ---------------------------------------------
  // File upload handler – hit /api/upload
  // ---------------------------------------------
  const handleFileUpload = async (e) => {
    e.preventDefault();

    const file = fileInputRef.current?.files[0];
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
 if (!res.ok) throw new Error(`Upload failed with ${res.status}`);

      // ❗️Any non‑200 status will throw to the catch block
     
      const result = await res.json();

      // We expect { public_id, url, type } from the backend
      if (result.url) {
        setData((prev) => ({
          ...prev,
          imageUrl: result.url, // store secure_url here
        }));
        alert("File uploaded successfully!");
        // optional: clear the input so user sees it accepted
        fileInputRef.current.value = "";
      } else {
        alert("Upload failed: no URL returned.");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed. Check console for details.");
    }
  };

  // ---------------------------------------------
  // Submit all form data to Mongo route
  // ---------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/mongo/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`Submit failed with ${res.status}`);

      const result = await res.json();
      console.log(result);
      alert("Data submitted successfully!");
      
      // Clear the form by resetting data to initial state
      setData({
        name: "",
        description: "",
        landmark: "",
        location: "",
        category: "",
        imageUrl: "",
      });
      
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error(err);
      alert("Submit failed. Check console for details.");
    }
  };

  // ---------------------------------------------
  // UI
  // ---------------------------------------------
  return (
    <div className="h-screen w-full flex justify-center items-center bg-emerald-50 relative">
      <img src="/favicon.png" alt="" className="w-20 h-20 lg:w-30 lg:h-30 absolute top-10 left-10" />
      <div className="w-20 h-20 absolute top-15 lg:top-30 left-40 lg:left-39">
        <h1 className="text-5xl lg:text-4xl font-bold top-10 right-10">Localite</h1>
      </div>

      <div className="flex flex-col gap-6 w-full lg:w-1/2 bg-white px-14 py-10 border border-emerald-400 rounded-lg shadow-md">
        <input
          onChange={handleChange}
          className="border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={data.name}
        />

        <input
          onChange={handleChange}
          className="border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg"
          type="text"
          name="description"
          placeholder="Enter your description"
          value={data.description}
        />

        <input
          onChange={handleChange}
          className="border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg"
          type="text"
          name="landmark"
          placeholder="Enter your landmark"
          value={data.landmark}
        />

        <input
          onChange={handleChange}
          className="border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg"
          type="text"
          name="location"
          placeholder="Enter your location"
          value={data.location}
        />

        <select
          onChange={handleChange}
          className="border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg"
          name="category"
          id="category"
          value={data.category}
        >
          <option value="">Select Category</option>
          <option value="spots">Visiting spot</option>
          <option value="lodging">Lodging</option>
          <option value="restaurants">Restaurant</option>
          <option value="shopping">Shopping</option>
          <option value="services">Services</option>
        </select>

        {/* File Upload Section */}
        <form onSubmit={handleFileUpload}>
          <div className="flex flex-col lg:flex-row w-full gap-4">
            <input
              ref={fileInputRef}
              className="w-full border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg"
              type="file"
              name="file"
            />
            <button
              className="cursor-pointer bg-blue-500 text-white p-4 rounded-lg lg:h-15 text-lg w-full lg:w-auto"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>

        {/* Preview the uploaded image, if any */}
        {data.imageUrl && (
          <div className="flex justify-center mt-2">
            <img
              src={data.imageUrl}
              alt="Uploaded preview"
              className="w-40 h-40 object-cover rounded-lg border border-emerald-400"
            />
          </div>
        )}

        {/* Submit Data Button */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleSubmit}
            className="cursor-pointer bg-violet-600 text-white flex justify-center items-center p-4 lg:px-12 rounded-full lg:h-15 text-lg w-full lg:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
