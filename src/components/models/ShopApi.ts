import { IApi, IProductsResponse, TOrder, IOrderResult } from "../../types";

export class ShopApi {
  private api: IApi;

  constructor(api: IApi) {
    this.api = api;
  }

  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>('/product/');
  }

  orderProducts(order: TOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>('/order', order);
  }
}