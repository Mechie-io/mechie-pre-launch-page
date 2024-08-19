'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles
// import { Autoplay, Pagination, Navigation } from 'swiper'; // Import necessary modules

const TestimonialCarousel = () => {
    const testimonials = [
        {
          text: "Before implementing his methods, I was about 40:2 applications to interviews. After implementing, I pulled about 50:8. His resources have been a game changer.",
          name: "Matthew Moner",
          position: "Engineering Intern, Anatak Robotics"
        },
        {
          text: "Have never come across anyone so authentic and clear with his explanations. His resources helped me do well in my design engineering internship interviews with Apple!",
          name: "Amar Kaul",
          position: "Mechanical Engineering, Lam Research"
        },
        {
          text: "Tamer’s content and practice helped me land my first role in California as a Battery Engineering Intern at Tesla. His advice and resources have been of great help.",
          name: "Salah Said",
          position: "Battery Engineering Intern, Tesla"
        },
        {
            text: "I had an interview with Google for a Product Design Engineer and Tamer’s guidance helped me land the job! Never imagined myself actually getting this opportunity.",
            name: "Joaquin Luzio",
            position: "Product Design Engineer"
          }
        
        // Add more testimonials here
      ];
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true} // Enable navigation
      autoplay={{
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Autoplay continues after user interaction
      }}
      breakpoints={{
        1024: { slidesPerView:3 },
        600: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      }}
    //   modules={[Autoplay, Pagination, Navigation]} // Register the modules
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 md:h-60 mb-20 h-80">
            <p className="mb-6">{testimonial.text}</p>
            <p className="text-right text-purple-600 font-semibold">{testimonial.name}</p>
            <p className="text-right text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
