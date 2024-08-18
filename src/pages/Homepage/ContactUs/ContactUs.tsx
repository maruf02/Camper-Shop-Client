import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Hey ${email}-Your email sent Successfully`,
      showConfirmButton: false,
      timer: 2500,
    });
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="text-center"
      >
        <div className="py-10">
          <div className="hero text-white rounded-lg bg-[#5B99C2]">
            <div className="hero-content flex-col lg:flex-row ">
              <div className="text-center w-full lg:w-1/2 lg:text-left">
                <h2>GET IN TOUCH</h2>
                <h1 className="text-5xl font-bold">
                  Think better with company and get us with contact!
                </h1>
                <p className="py-6">
                  We're happy to answer any questions you may have and help you
                  determine which of our services best fit your needs.
                </p>
                <p>Call us at: + (123)-456-789</p>
                <div className="flex gap-5 pt-5 justify-center lg:justify-start">
                  <p>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      target="_blank"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      target="_blank"
                    >
                      <FaTelegram className="text-2xl" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.facebook.com/programmingHero"
                      target="_blank"
                    >
                      <FaYoutube className="text-2xl" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="card shrink-0  text-white w-full lg:w-1/3    shadow-2xl bg-[#1A4870]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 5 }}
                  className="text-center"
                >
                  <form onSubmit={handleSubmit} className="card-body ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered input-primary bg-transparent text-white"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered input-primary bg-transparent text-white"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Phone</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="input input-bordered input-primary bg-transparent text-white"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Message</span>
                      </label>
                      <textarea
                        className="textarea textarea-secondary bg-transparent text-white"
                        placeholder="Bio"
                      ></textarea>
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary text-white">
                        Sent Your Message
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
