import { IBuyer, TPayment } from "../../types";

export class Buyer {
  private payment: TPayment;
  private address: string;
  private phone: string;
  private email: string;

  constructor(payment: TPayment, address: string, phone: string, email: string) {
    this.payment = payment;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  setData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) this.payment = data.payment;
    if (data.address !== undefined) this.address = data.address;
    if (data.phone !== undefined) this.phone = data.phone;
    if (data.email !== undefined) this.email = data.email;
  }

  getData(): IBuyer {
   return {payment: this.payment, address: this.address, phone: this.phone, email: this.email};
  }

  clearData(): void {
    this.payment = "" as TPayment;
    this.address = "";
    this.phone = "";
    this.email = "";
  }

  validate(): Partial<Record<keyof IBuyer, string>> {
  const errors: Partial<Record<keyof IBuyer, string>> = {};

  if (!this.payment) {
    errors.payment = "Не выбран вид оплаты";
  }
  if (!this.address) {
    errors.address = "Укажите адрес доставки";
  }
  if (!this.phone) {
    errors.phone = "Укажите телефон";
  }
  if (!this.email) {
    errors.email = "Укажите email";
  }

  return errors;
}


}