DROP TABLE Product;
DROP TABLE Coupon;

CREATE TABLE Product(
	Id_product INT NOT NULL,
	Nombre VARCHAR(50) NOT NULL, 
	PRIMARY KEY (Id_product)
);

CREATE TABLE Coupon(
	Id_coupon INT NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
	Description VARCHAR(50) NOT NULL,
	Valid_since VARCHAR(50) NOT NULL,
	Valid_until VARCHAR(50) NOT NULL, 
	Product_id_product INT NOT NULL,
	PRIMARY KEY (Id_coupon),
	CONSTRAINT fk_Coupon_Product1
		FOREIGN KEY (Product_id_product)
		REFERENCES Product (Id_product)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION 
);

INSERT INTO Product VALUES (1, 'Adidas');
INSERT INTO Product VALUES (2, 'Nike');
INSERT INTO Product VALUES (3, 'Fila');
INSERT INTO Product VALUES (4, 'Gucci');
INSERT INTO Product VALUES (5, 'Balenciaga');
SELECT * FROM Product;

INSERT INTO Coupon VALUES (1, 'Cupon 1', 'Descripcion 1', '2020-02-25T00:00:00.000', '2020-02-25T23:59:00.999', 2);
INSERT INTO Coupon VALUES (2, 'Cupon 2', 'Descripcion 2', '2020-02-25T00:00:00.000', '2020-03-26T23:59:00.999', 3);
INSERT INTO Coupon VALUES (3, 'Cupon 3', 'Descripcion 3', '2020-03-25T00:00:00.000', '2020-05-29T23:59:00.999', 4);
INSERT INTO Coupon VALUES (4, 'Cupon 4', 'Descripcion 4', '2020-02-25T00:00:00.000', '2020-04-20T23:59:00.999', 2);
INSERT INTO Coupon VALUES (5, 'Cupon 5', 'Descripcion 5', '2020-05-25T00:00:00.000', '2020-09-10T23:59:00.999', 1);
INSERT INTO Coupon VALUES (6, 'Cupon 1', 'Descripcion 6', '2020-02-25T00:00:00.000', '2020-03-25T23:59:00.999', 2);
INSERT INTO Coupon VALUES (7, 'Cupon 2', 'Descripcion 7', '2020-02-25T00:00:00.000', '2020-07-26T23:59:00.999', 3);
INSERT INTO Coupon VALUES (8, 'Cupon 3', 'Descripcion 8', '2020-03-25T00:00:00.000', '2020-10-29T23:59:00.999', 4);
INSERT INTO Coupon VALUES (9, 'Cupon 4', 'Descripcion 9', '2020-02-25T00:00:00.000', '2020-07-20T23:59:00.999', 2);
INSERT INTO Coupon VALUES (10, 'Cupon 5', 'Descripcion 10', '2020-05-25T00:00:00.000', '2020-08-10T23:59:00.999', 1);
SELECT * FROM Coupon;

