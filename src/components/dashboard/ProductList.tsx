import { BiPlus } from "react-icons/bi";
import ThemeButton from "../ui/ThemeButton";

interface ImageProduct extends Product {
  image: string;
}

const imageList = ["/api.png","/flow.png","/dashboard.png","/optimize.png","/cross_browser.png"];

function ProductVCard({ product }: { product: ImageProduct }) {
  return (
    <div className="w-full flex items-center gap-4 p-3 rounded-lg hover:shadow transition-all">
      <img className="w-12 h-12 rounded-md" src={product.image} alt="" />
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-lg">{product.name}</div>
        <div className="text-theme-subtle text-sm">
          Price: ${product.price.toFixed(2)}
        </div>
        <div className="text-theme-subtle text-sm">Sales: {product.sales}</div>
        <div className="text-theme-subtle text-sm capitalize">
          Category: {product.category}
        </div>
      </div>
    </div>
  );
}

export default function ProductList({ products }: { products: Product[] }) {
  const productsWithImages: ImageProduct[] = products.map((product, index) => ({
    ...product,
    image: imageList[index % imageList.length],
  }));

  return (
    <div className="p-5 bg-white rounded-lg md:rounded-2xl">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold font-medium">Product</span>
        <ThemeButton>
          <BiPlus size={20} /> <span className="sm-hidden">New</span>
        </ThemeButton>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        {productsWithImages.map((product, index) => (
          <ProductVCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}