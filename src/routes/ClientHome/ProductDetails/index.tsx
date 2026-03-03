import "./styles.css";
import * as productService from "../../../service/product-service";
import ButtonBlue from "../../../components/buttonBlue";
import ButtonWhite from "../../../components/buttonwhite";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";

export default function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonBlue name="Comprar" />
          <Link to="/">
            <ButtonWhite name="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
