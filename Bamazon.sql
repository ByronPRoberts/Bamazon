drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT,
  stock_quantity NUMERIC,
  PRIMARY KEY (item_id),
);

INSERT INTO	products(product_name, department_name, price, stock_quantity)
VALUES ("Laptop","Electronics",900,15),
("Cell Phone", "Electronics", 500, 5),
("Tablet","Electronics", 650, 4),
("Dutch Oven", "CookWare", 200, 5),
("Carving Knife", "CookWare", 55, 10),
("Cutting Board", "CookWare", 20, 8),
("Dog Bowl", "Pets", 10, 20),
("Cat Nip", "Pets", 8.50, 10),
("Dog Food", "Pets", 15, 10),
("Scratch Post", "Pets", 20, 50);

SELECT * FROM products;
