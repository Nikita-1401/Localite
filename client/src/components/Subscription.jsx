import React from 'react';

const Subscription = () => {
  const handleSubscribe = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: "monthly", // or whatever plan details you need
          amount: 1000,    // amount in smallest currency unit
          currency: "INR"  // currency code
        })
      });

      const data = await response.json();

      const options = {
        key: "AboiBTdI8FTSoY", // Replace this with your actual Razorpay Key ID
        subscription_id: data.id,
        name: "Localite",
        description: "Monthly Subscription Plan",
        theme: {
          color: "#7c3aed",
        },
        handler: function (res) {
          alert(`Subscription successful! ID: ${res.razorpay_subscription_id}`);
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Subscription failed", error);
      alert("Subscription failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/nature/ocean.jpg')] bg-cover bg-center p-4 flex flex-col">
      {/* Header with Logo and Title */}
      <div className="flex items-center gap-4 mb-6 md:mb-10">
        <img src="/logo.jpeg" alt="logo" className="w-12 h-12 md:w-20 md:h-20 rounded-full" />
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800">Localite</h1>
      </div>

      {/* Grid Section */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
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

        {/* Right Subscription Card */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 mx-auto flex flex-col items-center shadow-lg">
          <p className="text-xl md:text-2xl font-semibold">Subscribe For</p>
          <h1 className="text-3xl md:text-5xl font-bold text-violet-700">₹29/month</h1>

          {/* Benefits */}
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

          {/* Subscribe Button */}
          <button
            onClick={handleSubscribe}
            className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md text-base font-medium transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
