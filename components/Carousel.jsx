import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Add your images here
    const images = [
        '/ranchi.avif',
        '/picture.png',
        '/room.webp',
        '/resto.jpeg',
        '/house.jpeg',
        '/beach.jpeg'
    ];

    // Auto slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[50vh] md:min-h-[60vh] bg-emerald-50 ">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 py-8 ">
                
                {/* Carousel */}
                <div className="w-full md:w-1/2 relative h-[500px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl lg:h-[83vh] ">
                    {/* Image container */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div 
                                key={index}
                                className="min-w-full h-full"
                            >
                                <img 
                                    src={image} 
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dots indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <button 
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 text-white w-8 h-8 rounded-full hover:bg-black/30 flex items-center justify-center"
                        onClick={() => setCurrentSlide(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    >
                        ←
                    </button>
                    <button 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 text-white w-8 h-8 rounded-full hover:bg-black/30 flex items-center justify-center"
                        onClick={() => setCurrentSlide(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    >
                        →
                    </button>
                </div>
                {/* Text content */}
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-10">
                    <h1 className="text-4xl md:text-5xl font text-emerald-700 font-bold">
                        Find Local Services
                    </h1>
                    <p className="text-lg md:text-2xl text-emerald-700 font-semibold ">
                        Discover and connect with the best local service providers in your area
                    </p>
                    <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors font-bold ">
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Carousel; 