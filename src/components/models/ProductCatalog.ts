import { IProduct } from "../../types";

export class ProductCatalog {
  private products: IProduct[];
  private viewProduct: IProduct;
  
  constructor(products: IProduct[], viewProduct: IProduct) {
    this.products = products;
    this.viewProduct = viewProduct;
  }

  loadProducts(products: IProduct[]): void {
    this.products = products;
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductByID(id: string): IProduct | string {
    for (const item of this.products) {
      if (item.id === id) {
        return item;
      }
    }
    return 'Товар не найден'
  }

  loadViewProduct(product: IProduct): void {
    this.viewProduct = product;
  }

  getViewProduct(): IProduct {
    return this.viewProduct;
  }
}