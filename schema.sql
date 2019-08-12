--
--  MySQL
--
DROP TABLE IF EXISTS  products;
CREATE TABLE products (
  prd_id     INT AUTO_INCREMENT PRIMARY KEY,
  prd_name   VARCHAR(150),
  prd_price  FLOAT
);

INSERT INTO products (prd_name, prd_price) VALUES ('Product 1', 1199.95);
INSERT INTO products (prd_name, prd_price) VALUES ('Product 2', 11.95);
COMMIT;
