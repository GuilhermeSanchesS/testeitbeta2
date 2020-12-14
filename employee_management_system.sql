CREATE DATABASE employee_management_system;
USE employee_management_system;

CREATE TABLE employees(
	id SMALLINT UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
	email_id VARCHAR(60),
	password_e VARCHAR(40),
    office ENUM('Gestor','Funcionário'),
PRIMARY KEY(ID)) ENGINE = MyISAM;
DROP TABLE employees;
SELECT * FROM employee_management_system.employees;

INSERT INTO employees (first_name, last_name, email_id, password_e, office) VALUES("Patricia","Maximo","patricia.maximo@itbeta2.com.br", "951357","Gestor");
INSERT INTO employees (first_name, last_name, email_id, password_e, office) VALUES("Guilherme","Simões","guilherme.simoes@itbeta2.com.br", "0147852","Funcionário");