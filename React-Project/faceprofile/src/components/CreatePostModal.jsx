import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axios";

function CreatePostModal({ isOpen, onClose }) {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [privacy, setPrivacy] = useState("Public"); 

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(""); 

  if (!isOpen) return null;

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handlePost = async () => {
    if (!content.trim() && images.length === 0) {
      setError("Post content or at least one image is required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("content", content); 
    formData.append("privacy", privacy);
     
    images.forEach((image) => { 
      formData.append("images", image); 
    });

    // আমরা ট্র্যাক রাখবো কখন রিকোয়েস্ট শুরু হলো
    const startTime = Date.now();

    try {
      const response = await axiosInstance.post("api/feeds/", formData, { 
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      // রিকোয়েস্ট শেষ হওয়ার পর হিসেব করবো কত সময় পার হয়েছে
      const elapsedTime = Date.now() - startTime;
      const minimumLoadingTime = 3000; // ৩ সেকেন্ড (৩০০০ মিলিসেকেন্ড)
      const remainingTime = minimumLoadingTime - elapsedTime;

      // যদি এপিআই ৩ সেকেন্ডের আগেই রেসপন্স করে ফেলে, তবে বাকি সময়টুকু অপেক্ষা করবে
      setTimeout(() => {
        setSuccess("Post Created Successfully 🎉");
        setContent("");
        setImages([]);
        setPrivacy("Public");
        setLoading(false); // এখানে এসে লোডিং ফলস হবে

        // সাকসেস মেসেজ ১.৫ সেকেন্ড দেখিয়ে পেজ রিলোড হবে
        setTimeout(() => {
          setSuccess("");
          onClose();
          window.location.reload(); // নতুন পোস্ট টপে দেখানোর জন্য পেজ রিলোড
        }, 1500);

      }, remainingTime > 0 ? remainingTime : 0);

    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.detail || 
        "Something went wrong while creating the post."
      );
      setLoading(false); // এরর আসলে সাথে সাথে লোডিং বন্ধ হবে
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      {/* Modal */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Create Post</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 flex-1">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <Link to="/profile">
              <img
                src="https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/669013670_3143270789192710_7484495445971941533_n.jpg?stp=c0.0.631.631a_cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEowRNDC_gN5Ssm1k1s_yRsJg0si-Q77lEmDSyL5DvuUbJglhehRIV8gUx7hUA06PcT4Z3dD_jUFyNhhLmL0ihZ&_nc_ohc=wZEZq0u9Gg4Q7kNvwHAlkQ8&_nc_oc=Adquagx4BQ6n68OmYHsaSmMmqCP7FWjTA_oYei8InHcUZ1hvmv4l5lcTYUYyv-AbV5I&_nc_zt=24&_nc_ht=scontent.fdac23-1.fna&_nc_gid=EcmQCc2_JkqTnFcqJQEH9g&_nc_ss=7b2a8&oh=00_Af6GV9-EmvjMv_hz_Sm5UQbLRnxx0nNrpzOZeWHeT7jj7w&oe=6A1794E6"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer"
              />
            </Link>

            <div>
              <h4 className="font-semibold">Akkas</h4>
              <select 
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
                className="bg-gray-100 px-3 py-1 rounded-lg text-sm outline-none"
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full mt-5 min-h-[120px] resize-none outline-none text-lg"
          />

          {/* Image Preview */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  {/* Remove Button */}
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-black/60 text-white w-7 h-7 rounded-full text-sm hover:bg-black"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upload Box */}
          <label className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition mt-5">
            <span className="text-3xl">📷</span>
            <p className="text-gray-500 mt-2 text-center">Add Photos / Videos</p>
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handleImages}
            />
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mx-4 mb-3 bg-red-100 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mx-4 mb-3 bg-green-100 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
            {success} 
          </div> 
        )}

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            onClick={handlePost}
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition text-white ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;