import { FaEdit } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import {
  useAddProductItemMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../redux/api/api";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    data: productsData,
    refetch,
    isError,
    isLoading,
  } = useGetAllProductsQuery(undefined);
  const [addProductItem, {}] = useAddProductItemMutation();

  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const products = productsData?.data || [];

  console.log(products);

  const categories = ["Monitor", "Motherboard", "Processor", "Ram", "Hdd"];
  const handleAddProduct = async (event: React.FormEvent) => {
    event.preventDefault();
    // Extract form data
    const form = event.target as HTMLFormElement;
    const name = form.name.value;
    const Mimages = form.Mimage.value;
    const images2 = form.image2.value;
    const images3 = form.image3.value;
    const images4 = form.image4.value;
    const images5 = form.image5.value;
    const category = selectedCategory;
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const ratings = parseInt(form.rating.value);
    const description = form.description.value;

    const productData = {
      name,
      Mimages,
      images2,
      images3,
      images4,
      images5,
      category,
      price,
      quantity,
      ratings,
      description,
    };
    console.log("productData", productData);

    try {
      // Call the addProduct mutation
      const response = await addProductItem(productData).unwrap();
      console.log("Product added:", response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      // Optionally close the modal after a successful addition
      const modal = document.getElementById(
        "AddProductModal"
      ) as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
      refetch();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleEditProduct = (productId: string) => {
    setSelectedProductId(productId);
    const modal = document.getElementById(
      "editProductModal"
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
    const product = products.find((p: any) => p._id === productId);
    if (product) {
      setSelectedProduct(product);
      setSelectedCategory(product.category); // Set the selected category
    }
  };

  const handleEditFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = form.name.value;
    const Mimages = form.Mimage.value;
    const images2 = form.image2.value;
    const images3 = form.image3.value;
    const images4 = form.image4.value;
    const images5 = form.image5.value;
    const category = selectedCategory;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const productModifyData = {
      name,
      Mimages,
      images2,
      images3,
      images4,
      images5,
      category,
      price,
      quantity,
      rating,
      description,
    };
    console.log("Product ID:", selectedProductId);
    console.log("Product Data:", productModifyData);
    // Log the data to console
    console.log("Product ID:", selectedProductId);
    console.log("Product Data:", productModifyData);

    try {
      // Call the updateProduct mutation
      const response = await updateProduct({
        productId: selectedProductId,
        productModifyData,
      });
      console.log("Product updated:", response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Updated Product info",
        showConfirmButton: false,
        timer: 1500,
      });

      // Optionally close the modal after a successful update
      const modal = document.getElementById(
        "editProductModal"
      ) as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
      refetch();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };
  const handleSelectChangeCategory = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  console.log(selectedProductId);

  const handleDeleteProduct = (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(productId).unwrap();
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          refetch();
        } catch (error) {
          console.error("Failed to delete product:", error);
          Swal.fire(
            "Error!",
            "There was an issue deleting the product.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between pt-5">
        <h2 className="text-2xl text-black font-semibold">
          Product Management
        </h2>

        <button
          onClick={() => {
            const modal = document.getElementById(
              "AddProductModal"
            ) as HTMLDialogElement;
            if (modal) {
              modal.showModal();
            }
          }}
          className="flex text-white btn bg-[#1A4870] hover:bg-[#5B99C2] btn-md justify-between  "
        >
          <span>
            <IoAddCircleOutline className="w-6 h-7" />
          </span>
          <span>Add Product</span>
        </button>
        <dialog id="AddProductModal" className="modal  ">
          <div className="modal-box bg-[#1A4870]  ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleAddProduct}>
              <div className="flex justify-center pt-5 ">
                <h1 className="text-white text-3xl ">Add New Product</h1>
              </div>
              <p className="border border-1 border-gray-400 my-3 "></p>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="pr-12 text-white">Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Product name"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white"> Main Image:</label>
                  <input
                    type="text"
                    name="Mimage"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image2(Link):</label>
                  <input
                    type="text"
                    name="image2"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image3(Link):</label>
                  <input
                    type="text"
                    name="image3"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image4(Link):</label>
                  <input
                    type="text"
                    name="image4"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image5(Link):</label>
                  <input
                    type="text"
                    name="image5"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-8 text-white">Category:</label>
                  <select
                    onChange={handleSelectChangeCategory}
                    value={selectedCategory || ""} // Handle the case where selectedCategory is initially undefined
                    className="select select-bordered w-full max-w-xs bg-[#1A4870] text-white"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="pr-16 text-white">Price:</label>
                  <input
                    type="number"
                    name="price"
                    min="0"
                    placeholder="Enter Price Here"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white  "
                  />
                </div>
                <div>
                  <label className="pr-10 text-white">Quantity:</label>
                  <input
                    type="number"
                    min="0"
                    name="quantity"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>

                <div>
                  <label className="pr-12 text-white">Ratings:</label>
                  <input
                    type="number"
                    name="rating"
                    max="5"
                    min="1"
                    placeholder="Enter rating here"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div className="flex flex-row align-middle">
                  <label className="pr-6  text-white">Description:</label>
                  <textarea
                    name="description"
                    className="textarea textarea-bordered w-full max-w-xs bg-[#1A4870] text-white"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <div className="flex justify-center my-5  ">
                  <button className="flex text-white btn hover:bg-[#1A4870] bg-[#5B99C2] btn-md justify-center w-full text-2xl pb-1 ">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
        {/* edit modal */}
        <dialog id="editProductModal" className="modal">
          <div className="modal-box bg-[#1A4870]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleEditFormSubmit}>
              <div className="flex justify-center pt-5 ">
                <h1 className="text-white text-3xl ">
                  {selectedProductId ? "Edit Product" : "Add New Product"}
                </h1>
              </div>
              <p className="border border-1 border-gray-400 my-3 "></p>
              <div className="flex flex-col gap-2">
                {selectedProductId && (
                  <div className="text-white text-center mb-4">
                    <p>Product ID: {selectedProductId}</p>
                  </div>
                )}
                <div>
                  <label className="pr-12 text-white">Name:</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={selectedProduct?.name}
                    placeholder="Enter Product name"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Main Image:</label>
                  <input
                    type="text"
                    defaultValue={selectedProduct?.Mimages}
                    name="Mimage"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image2(Link):</label>
                  <input
                    type="text"
                    defaultValue={selectedProduct?.images2}
                    name="image2"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image3(Link):</label>
                  <input
                    type="text"
                    defaultValue={selectedProduct?.images3}
                    name="image3"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image4(Link):</label>
                  <input
                    type="text"
                    defaultValue={selectedProduct?.images4}
                    name="image4"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-2 text-white">Image5(Link):</label>
                  <input
                    type="text"
                    defaultValue={selectedProduct?.images5}
                    name="image5"
                    placeholder="Enter image Link (Link only)"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div>
                  <label className="pr-8 text-white">Category:</label>
                  <select
                    onChange={handleSelectChangeCategory}
                    value={selectedCategory || ""} // Handle the case where selectedCategory is initially undefined
                    className="select select-bordered w-full max-w-xs bg-[#1A4870] text-white"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="pr-16 text-white">Price:</label>
                  <input
                    type="number"
                    name="price"
                    min="0"
                    defaultValue={selectedProduct?.price}
                    placeholder="Enter Price Here"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white  "
                  />
                </div>
                <div>
                  <label className="pr-10 text-white">Quantity:</label>
                  <input
                    type="number"
                    min="0"
                    name="quantity"
                    defaultValue={selectedProduct?.quantity}
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>

                <div>
                  <label className="pr-12 text-white">Ratings:</label>
                  <input
                    type="number"
                    name="rating"
                    max="5"
                    min="1"
                    defaultValue={selectedProduct?.ratings}
                    placeholder="Enter rating here"
                    className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                  />
                </div>
                <div className="flex flex-row align-middle">
                  <label className="pr-6  text-white">Description:</label>
                  <textarea
                    name="description"
                    defaultValue={selectedProduct?.description}
                    className="textarea textarea-bordered w-full max-w-xs bg-[#1A4870] text-white"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <div className="flex justify-center my-5  ">
                  <button className="flex text-white btn hover:bg-[#1A4870] bg-[#5B99C2] btn-md justify-center w-full text-2xl pb-1 ">
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
        {/* edit modal */}
      </div>
      {/* table view */}
      <div className="container mx-auto overflow-x-auto pb-5 w-full max-w-4xl">
        <table className="table w-full ">
          {/* head */}
          <thead className="text-black text-lg">
            <tr>
              <th>Name</th>
              <th>category</th>
              <th>price</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.length === 0 ? (
              <p>sorry</p>
            ) : (
              products.map((product: any) => (
                <>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={product.Mimages}
                              alt="Avatar Tailwind CSS Component"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-semibold">{product.category}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-semibold">${product.price}</div>
                      </div>
                    </td>
                    <th>
                      <div className="space-x-0">
                        <button
                          onClick={() => handleEditProduct(product._id)}
                          className="btn btn-ghost btn-sm  "
                        >
                          <FaEdit className="w-6 h-6 " />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="btn btn-ghost btn-sm"
                        >
                          <MdDeleteForever className="w-6 h-6 text-red-700 " />
                        </button>
                      </div>
                    </th>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* table view */}
    </div>
  );
};

export default ProductManagement;
