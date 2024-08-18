import { motion } from "framer-motion";

const FaqSection = () => {
  return (
    <div className="w-full h-full bg-gray-300 my-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="text-center"
      >
        <div className="flex flex-row justify-center py-5">
          <h1 className="text-xl md:text-3xl text-black font-bold text-center underline">
            FAQ :
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full h-full py-5">
          {/* left side */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center align-middle items-center">
            <h1 className="text-lg text-black font-semibold">
              Have Questions? We’re Here to Help!
            </h1>
            <h1 className="text-base text-black px-5 text-center">
              At Camper Shop, we believe that a great adventure starts with the
              right gear and the right information. Whether you’re new to
              Technology, we’re here to assist you with any queries you may
              have. Don’t hesitate to reach out. your questions help us serve
              you better!
            </h1>
            <br />
            <h1 className="text-center">
              <span className="text-lg text-black font-semibold text-center">
                Call to Action:
              </span>
              <br />
              <span className="text-center px-8 ">
                Need more information? Feel free to ask your question here or
                explore our comprehensive FAQ section on the right to find quick
                answers.
              </span>
            </h1>
          </div>
          {/* left side */}
          {/* right side */}
          <div className="w-full lg:w-7/12 h-full flex flex-col justify-center align-middle items-center px-5 text-white">
            <div className="collapse collapse-arrow bg-[#1A4870]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                1. What is Camper Shop?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    Camper Shop is your one-stop destination for high-quality
                    Technology gear and accessories. We offer a wide range of
                    products designed to make your Tech experience enjoyable and
                    memorable.
                  </li>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1A4870] my-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                2. How can I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    Once your order is shipped, you will receive a tracking
                    number via email. You can use this number on our website
                    under the "Track My Order" section to see the status of your
                    shipment.
                  </li>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1A4870] my-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                3. What is your return policy?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    We offer a 30-day return policy on most items. If you're not
                    satisfied with your purchase, you can return it within 30
                    days of receipt for a full refund, provided the item is in
                    its original condition.
                  </li>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1A4870] my-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                4. Do you offer international shipping?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    Yes, we do offer international shipping. Shipping rates and
                    delivery times vary depending on your location. Please check
                    our shipping policy for more details.
                  </li>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1A4870] my-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                5. How can I contact customer support?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    You can reach our customer support team via email at
                    support@campershop.com or by calling +123 456 7890. We’re
                    available Monday to Friday, from 9 AM to 5 PM (PST).
                  </li>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1A4870] my-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                6. Are there any warranties on your products?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    Yes, many of our products come with manufacturer warranties.
                    Please refer to the product description or contact us for
                    specific warranty information.
                  </li>
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1A4870] my-1">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                7. Can I cancel or modify my order?
              </div>
              <div className="collapse-content">
                <p>
                  <li>
                    Orders can be canceled or modified within 24 hours of
                    placing them. Please contact our customer support team as
                    soon as possible to make changes.
                  </li>
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
        </div>
      </motion.div>
    </div>
  );
};

export default FaqSection;
