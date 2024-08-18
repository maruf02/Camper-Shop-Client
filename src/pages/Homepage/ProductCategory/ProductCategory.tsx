import { motion } from "framer-motion";

const ProductCategory = () => {
  const categories = [
    {
      name: "Monitor",
      image:
        "https://ryans.com/storage/products/main/gigabyte-aorus-co49dq-49-inch-5k-uw-dqhd-oled-11709813848.webp",
    },
    {
      name: "Motherboard",
      image:
        "https://ryans.com/storage/products/main/asus-rog-crosshair-x670e-hero-wi-fi-6e-ddr5-amd-11713272272.webp",
    },
    {
      name: "Processor",
      image:
        "https://ryans.com/storage/products/main/intel-14th-gen-raptor-lake-refresh-core-i9-21699365342.webp",
    },
    {
      name: "Ram",
      image:
        "https://ryans.com/storage/products/main/team-delta-rgb-16gb-ddr5-8000mhz-white-gaming-11689859379.webp",
    },
    {
      name: "HDD",
      image:
        "https://ryans.com/storage/products/main/synology-sat5210-series-192tb-internal-11704540665.webp",
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="text-center"
      >
        {/* category section */}
        <div className="w-full h-full ">
          <h1 className="text-xl md:text-3xl text-black font-bold">
            Our Product Categories:
          </h1>
          <div className="flex flex-row justify-center flex-wrap gap-5 pt-8">
            {categories.map((category, index) => (
              <div key={index} className="card bg-transparent w-60 shadow-xl">
                <figure className="px-0 pt-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="rounded-xl"
                  />
                </figure>
                <div className=" ">
                  <h2 className="text-xl text-black font-semibold text-center py-2">
                    {category.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* category section */}
      </motion.div>
    </div>
  );
};

export default ProductCategory;
