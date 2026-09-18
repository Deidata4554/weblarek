import './scss/styles.scss';

import { ProductCatalog } from "./components/models/ProductCatalog";
import { Cart } from "./components/models/Cart";
import { Buyer } from "./components/models/Buyer";
import { apiProducts } from "./utils/data";

// ---------- ProductCatalog ----------
const productCatalog = new ProductCatalog();

productCatalog.loadProducts(apiProducts.items);
console.log("Каталог после loadProducts: ", productCatalog.getProducts());

const foundProduct = productCatalog.getProductByID(apiProducts.items[0].id);
console.log("Товар по существующему id: ", foundProduct);

const notFoundProduct = productCatalog.getProductByID("несуществующий-id");
console.log("Товар по несуществующему id: ", notFoundProduct);

productCatalog.loadViewProduct(apiProducts.items[0]);
console.log("Выбранный для просмотра товар: ", productCatalog.getViewProduct());

// ---------- Cart ----------
const cart = new Cart();

console.log("Корзина после создания (должна быть пустой): ", cart.getProducts());

cart.addProduct(apiProducts.items[0]);
cart.addProduct(apiProducts.items[1]);
console.log("Корзина после добавления двух товаров: ", cart.getProducts());

console.log("Количество товаров в корзине: ", cart.getCount());
console.log("Стоимость товаров в корзине: ", cart.getCost());

console.log(
  "Есть ли в корзине товар с id первого товара: ",
  cart.hasProduct(apiProducts.items[0].id)
);
console.log(
  "Есть ли в корзине товар с несуществующим id: ",
  cart.hasProduct("несуществующий-id")
);

cart.deleteProduct(apiProducts.items[0]);
console.log("Корзина после удаления первого товара: ", cart.getProducts());

cart.clear();
console.log("Корзина после очистки (должна быть пустой): ", cart.getProducts());

// ---------- Buyer ----------
const buyer = new Buyer("card", "ул. Ленина, 10", "+79991234567", "test@test.com");

console.log("Данные покупателя после создания: ", buyer.getData());

const errorsEmpty = buyer.validate();
console.log("Ошибки валидации при заполненных данных (должно быть {}): ", errorsEmpty);

buyer.setData({ address: "ул. Мира, 5" });
console.log("Данные покупателя после setData (изменился только адрес): ", buyer.getData());

buyer.clearData();
console.log("Данные покупателя после clearData: ", buyer.getData());

const errorsFull = buyer.validate();
console.log("Ошибки валидации при пустых данных: ", errorsFull);


import { API_URL } from "./utils/constants";
import { Api } from "./components/base/Api";
import { ShopApi } from "./components/models/ShopApi";

// ---------- Слой коммуникации ----------
const api = new Api(API_URL);
const shopApi = new ShopApi(api);

shopApi.getProducts()
  .then((data) => {
    console.log("Ответ сервера (каталог): ", data);

    productCatalog.loadProducts(data.items);
    console.log("Каталог, сохранённый в модели после запроса: ", productCatalog.getProducts());
  })
  .catch((err) => {
    console.error("Ошибка при получении каталога: ", err);
  });