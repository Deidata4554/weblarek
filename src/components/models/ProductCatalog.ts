import { IProduct } from "../../types";

export class ProductCatalog {
  private products: IProduct[];
  private viewProduct: IProduct;
  
  constructor(products: IProduct[], viewProduct: IProduct) {
    this.products = products;
    this.viewProduct = viewProduct;
  }

  private loadProducts(products: IProduct[]): void {
    this.products = products;
  }

  private getProducts(): IProduct[] {
    return this.products;
  }

  private getProductByID(id: string): IProduct | string {
    for (const item of this.products) {
      if (item.id === id) {
        return item;
      }
    }
    return 'Товар не найден'
  }

  private loadViewProduct(product: IProduct): void {
    this.viewProduct = product;
  }

  private getViewProduct(): IProduct {
    return this.viewProduct;
  }
}