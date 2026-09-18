import { IProduct } from "../../types";

export class Cart {
  private selectedProducts: IProduct[] = [];

  getProducts(): IProduct[]{
    return this.selectedProducts;
  }

  addProduct(product: IProduct): void {
    this.selectedProducts.push(product);
  }

  deleteProduct(product: IProduct): void {
    this.selectedProducts = this.selectedProducts.filter(
      (item) => item.id !== product.id
    );
  }

  clear(): void {
    this.selectedProducts = [];
  }

 getCost(): number {
    return this.selectedProducts.reduce(
      (sum, item) => sum + (item.price ?? 0),
      0
    );
  }

  getCount(): number {
    return this.selectedProducts.length;
  }

  hasProduct(id: string): boolean {
    return this.selectedProducts.some((item) => item.id === id);
  }
  
}