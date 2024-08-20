import { useRef } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useReloadWarning from "../../redux/useReloadWarning";

const teamMembers = [
  {
    name: "Alice Brown",
    role: "Founder & CEO",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "Alice is an outdoor enthusiast who started Camper Shop to inspire others to explore the beauty of nature.",
  },
  {
    name: "Michael Green",
    role: "Lead Designer",
    image: "https://i.postimg.cc/X7yNkmcR/download.png",
    bio: "Michael is passionate about creating innovative designs that blend functionality with aesthetics, ensuring every product stands out.",
  },
  {
    name: "Sophia Williams",
    role: "Customer Support",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "Sophia is committed to delivering exceptional customer service, making sure every camper's needs are met with care.",
  },
  {
    name: "David Thompson",
    role: "Product Manager",
    image: "https://i.postimg.cc/X7yNkmcR/download.png",
    bio: "David oversees the product development process, ensuring that every item is crafted with the highest standards of quality and durability.",
  },
  {
    name: "Olivia Martinez",
    role: "Marketing Specialist",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "Olivia creates impactful marketing campaigns that resonate with outdoor lovers and share our brand’s story.",
  },
  {
    name: "Lucas Miller",
    role: "Operations Manager",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "Lucas ensures smooth operations across all departments, keeping Camper Shop running efficiently and effectively.",
  },
  {
    name: "Emma Johnson",
    role: "Logistics Coordinator",
    image: "https://i.postimg.cc/X7yNkmcR/download.png",
    bio: "Emma manages the logistics with precision, ensuring timely delivery of our products to customers around the globe.",
  },
  {
    name: "Benjamin Lee",
    role: "Financial Analyst",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "Benjamin analyzes financial data to help Camper Shop make informed decisions and maintain a healthy growth trajectory.",
  },
  {
    name: "Isabella Davis",
    role: "Social Media Manager",
    image: "https://i.postimg.cc/X7yNkmcR/download.png",
    bio: "Isabella manages our social media presence, crafting content that engages and grows our community of adventurers.",
  },
  {
    name: "James White",
    role: "E-commerce Specialist",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "James optimizes our online store, ensuring a seamless shopping experience for all our customers.",
  },
  {
    name: "Charlotte Harris",
    role: "Content Creator",
    image: "https://i.postimg.cc/X7yNkmcR/download.png",
    bio: "Charlotte is the creative mind behind our blog and video content, sharing tips and inspiration for outdoor adventures.",
  },
  {
    name: "Henry Wilson",
    role: "IT Specialist",
    image: "https://i.postimg.cc/sgdj6mTv/download-1.jpg",
    bio: "Henry maintains our technical infrastructure, ensuring that all our systems are secure and running smoothly.",
  },
  {
    name: "Ava Anderson",
    role: "Event Coordinator",
    image: "https://i.postimg.cc/X7yNkmcR/download.png",
    bio: "Ava organizes our community events, bringing together outdoor enthusiasts to share their love for camping and nature.",
  },
];

const AboutUsPage = () => {
  useReloadWarning();
  // const swiperRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      <header className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          Learn more about our mission, values, and team.
        </p>
      </header>

      {/* <section className="max-w-7xl mx-auto px-4 py-10"> */}
      <section className="w-full mx-auto px-4 py-10">
        {/* Mission Statement */}
        <div className="w-full bg-gray-300  rounded-lg my-5 py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg max-w-3xl mx-auto">
              At Camper Shop, our mission is to inspire and equip adventurers of
              all kinds with the highest quality gear and products for their
              outdoor journeys. We believe in the transformative power of nature
              and aim to make the great outdoors accessible, enjoyable, and
              sustainable for everyone. By offering a diverse range of products
              tailored to the needs of campers, hikers, and outdoor enthusiasts,
              we strive to be your trusted partner in every adventure. Our
              commitment is to provide exceptional service, innovative
              solutions, and a community of like-minded explorers who share a
              passion for the wilderness.
            </p>
          </motion.div>
        </div>
        {/* Mission Statement */}

        <div className="flex flex-col md:flex-row w-full bg-white  rounded-lg pt-5">
          {/* Contact Information */}
          <div className="w-full md:w-4/12  text-center   ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Contact Information
              </h2>
              <div className="flex flex-col justify-center items-center text-center  h-fit  ">
                <div className="flex items-center text-center space-x-2 mb-2">
                  <FaPhoneAlt className="text-blue-500" />
                  <span>+123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <FaEnvelope className="text-red-500" />
                  <span>info@campershop.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>123 Camper St, City, Country</span>
                </div>
              </div>
              {/* Social Media Links */}
              <div className="pt-8">
                {/* Social Media Links */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                  className="mb-12 text-center"
                >
                  <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
                  <div className="flex justify-center space-x-8">
                    <a
                      href="https://www.facebook.com/programmingHero"
                      className="text-blue-700 text-2xl"
                      target="_blank"
                    >
                      <FaFacebook className="hover:text-blue-500 transition-colors duration-200" />
                    </a>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      target="_blank"
                      className="text-blue-500 text-2xl"
                    >
                      <FaTwitter className="hover:text-blue-300 transition-colors duration-200" />
                    </a>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      className="text-pink-600 text-2xl"
                      target="_blank"
                    >
                      <FaInstagram className="hover:text-pink-400 transition-colors duration-200" />
                    </a>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      className="text-blue-900 text-2xl"
                      target="_blank"
                    >
                      <FaLinkedin className="hover:text-blue-600 transition-colors duration-200" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-8/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Our Location
              </h2>
              <div className="flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.385836821081!2d90.36095797534226!3d23.80487508668285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c124e70bf59b%3A0x21b6f484e27a03e9!2sMirpur%20Shopping%20Center!5e0!3m2!1sen!2sbd!4v1723964946547!5m2!1sen!2sbd"
                  width="100%"
                  height="400"
                  className="border-4 border-gray-300 rounded-lg shadow-lg"
                  // allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Members */}

        <div className="py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
            <Swiper
              // ref={swiperRef}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              direction="horizontal"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1536: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={10}
              virtual
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Virtual, Navigation, Pagination, Autoplay]}
              className="h-96"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} virtualIndex={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg shadow-lg p-6 mx-auto w-full sm:w-3/4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full mb-4"
                    />
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <p className="mt-2 text-gray-700">{member.bio}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
