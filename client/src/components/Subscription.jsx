import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 2900,
          currency: "INR",
        }),
      });

      const data = await response.json();
      if (!data.orderId) throw new Error("Order creation failed");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Localite",
        description: "Monthly Support",
        order_id: data.orderId,
        theme: { color: "#7c3aed" },
        handler: async function (response) {
          const verifyResponse = await fetch("http://localhost:5000/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();
          if (verifyData.success) {
            toast.success("Payment successful!", { position: "top-center", transition: Bounce });
          } else {
            toast.error("Verification failed!", { position: "top-center", transition: Bounce });
          }
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Payment failed. Try again.", { position: "top-center", transition: Bounce });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/nature/ocean.jpg')] bg-cover bg-center p-4 flex flex-col">
      <ToastContainer />
      <div className="flex items-center gap-4 mb-6 md:mb-10">
        <img src="/logo.jpeg" alt="logo" className="w-12 h-12 md:w-20 md:h-20 rounded-full" />
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800">Localite</h1>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center px-2 md:px-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            One Subscription. Endless Discoveries. Stronger Local Tourism.
          </h2>
          <p className="text-lg md:text-xl font-medium mt-3">
            Discover Hidden Gems. Empower Local Communities.
          </p>
          <p className="text-lg md:text-xl font-medium">
            Find More Than Places — Uplift the People Behind Them.
          </p>
        </div>

        <div className="w-full max-w-md bg-white rounded-xl p-6 mx-auto flex flex-col items-center shadow-lg">
          <p className="text-xl md:text-2xl font-semibold">Subscribe For</p>
          <h1 className="text-3xl md:text-5xl font-bold text-violet-700">₹29/month</h1>

          <div className="w-full mt-4 flex flex-col gap-3">
            {[
              "This website can make your tour easy",
              "This will increase your profile views",
              "Get more exposure among tourists",
              "Direct support to your local listings",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <img src="/check.jpg" alt="check" className="w-6 h-6 md:w-8 md:h-8 mt-1" />
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleSubscribe}
            disabled={loading} 
            className={`mt-6 w-full ${
              loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'
            } text-white py-3 rounded-md text-base font-medium transition-colors`}
          >
            {loading ? 'Processing...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
