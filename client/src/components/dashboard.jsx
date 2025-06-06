import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    description: "",
    landmark: "",
    location: "",
    category: "",
    imageUrl: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current?.files[0];
    if (!file) {
      toast.error("Please select a file first.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Upload failed with ${res.status}`);
      const result = await res.json();

      if (result.url) {
        setData((prev) => ({
          ...prev,
          imageUrl: result.url,
        }));
        toast.success("File uploaded successfully!", {
          position: "top-center",
          autoclose: 2000,

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        fileInputRef.current.value = "";
      } else {
        toast.error("Upload failed: no URL returned.", {
          position: "top-center",
          autoclose: 2000,

          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Upload failed. Check console for details.", {
        position: "top-center",
        autoclose: 2000,

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/mongo/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`Submit failed with ${res.status}`);
      const result = await res.json();
      console.log(result);
      toast.success("Data submitted successfully!", {
        position: "top-center",
        autoclose: 2000,

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setData({
        name: "",
        description: "",
        landmark: "",
        location: "",
        category: "",
        imageUrl: "",
      });
      fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      toast.error("Submit failed. Check console for details.", {
        position: "top-center",
        autoclose: 2000,

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-emerald-50 flex flex-col items-center p-6 overflow-auto">
      <ToastContainer />
      {/* Logo & Title */}
      <div className="flex items-center  gap-4 mb-8">
        <img src="/favicon.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 md:mt-8">Localite</h1>
      </div>

      {/* Form Box */}
      <div className="w-full max-w-3xl bg-white px-6 py-8 border border-emerald-400 rounded-lg shadow-lg flex flex-col gap-6">
        {[
          { name: "name", placeholder: "Enter your name" },
          { name: "description", placeholder: "Enter your description" },
          { name: "landmark", placeholder: "Enter your landmark" },
          { name: "location", placeholder: "Enter your location" },
        ].map(({ name, placeholder }) => (
          <input
            key={name}
            onChange={handleChange}
            name={name}
            value={data[name]}
            placeholder={placeholder}
            className="border-2 border-emerald-400 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 p-4 text-lg w-full"
            type="text"
          />
        ))}

        {/* Category Select */}
        <select
          onChange={handleChange}
          name="category"
          value={data.category}
          className="border-2 border-emerald-400 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 p-4 text-lg w-full"
        >
          <option value="">Select Category</option>
          <option value="spots">Visiting spot</option>
          <option value="lodging">Lodging</option>
          <option value="restaurants">Restaurant</option>
          <option value="shopping">Shopping</option>
          <option value="services">Services</option>
        </select>

        {/* File Upload */}
        <form onSubmit={handleFileUpload} className="flex flex-col sm:flex-row gap-4 items-stretch">
          <input
            ref={fileInputRef}
            type="file"
            name="file"
            className="border-2 border-emerald-400 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 p-4 text-lg w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-4 rounded-lg text-lg w-full sm:w-auto"
          >
            Upload
          </button>
        </form>

        {/* Preview uploaded image */}
        {data.imageUrl && (
          <div className="flex justify-center mt-2">
            <img
              src={data.imageUrl}
              alt="Uploaded preview"
              className="w-40 h-40 object-cover rounded-lg border border-emerald-400"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
