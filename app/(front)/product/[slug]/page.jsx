import data from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "@/components/products/AddToCart";
import productService from "@/lib/services/productService";
import { convertDocToObj } from "@/lib/utils";

export const generateMetadata = async ({ params }) => {
  console.log("Fetching product with slug:", params.slug);
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductDetails = async ({ params }) => {
  const product = await productService.getBySlug(params.slug);
  return !product ? (
    <div>Product not found!</div>
  ) : (
    <>
      <div className="my-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2">
        <div className="md:col-span-2 flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li className="break-words">
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>₹{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between items-center">
                <div className="flex-shrink-0">Status :</div>
                <div>
                  {product.countInStock > 0 ? "In stock" : "Unavailable"}
                </div>
              </div>

              {product.countInStock > 0 ? (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: "",
                      size: "",
                    }}
                  />
                </div>
              ) : (
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-disabled"
                    tabIndex="-1"
                    role="button"
                    aria-disabled="true"
                  >
                    Out of stock
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
