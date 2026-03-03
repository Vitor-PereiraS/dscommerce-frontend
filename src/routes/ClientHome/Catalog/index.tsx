import "./styles.css";
import * as productService from "../../../service/product-service";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/buttonNextPage";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";


export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findAll()
      .then(response => {
        setProducts(response.data.content);
      })
  }, []);

  return (

   <main>
      <section id="catalog-section" className="dsc-container">
      <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(product => (
              <CatalogCard key={product.id} product={product} />
            ))
          }

        </div>
          <ButtonNextPage name="Carregar mais"/>
      </section>
    </main>
   
  );
}
