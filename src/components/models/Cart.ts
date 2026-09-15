import { IProduct } from "../../types";

export class Cart {
  private selectedProducts: IProduct[] | null = null;

  private getProducts(): IProduct[] | null {
    return this.selectedProducts;
  }

  private addProduct(product: IProduct): void {
    if (this.selectedProducts !== null) {
      this.selectedProducts.push(product);
    } else {
      this.selectedProducts = [product];
    }
  }

  // private deleteProduct(product: IProduct): void {
  //   if (this.selectedProducts !== null) {
  //     for (var item =)
  //   }
  // }

  private clear(): void {
    this.selectedProducts = null;
  }

  // private getCost(): number {

  // }

  private getCount(): number {
    if (this.selectedProducts !== null) {
      return this.selectedProducts.length;
    } else {
      return 0;
    }
  }
  
}