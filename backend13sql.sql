USE user_auth_db;
/*CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(255),
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    card_number VARCHAR(20)
);*/
DROP TABLE IF EXISTS payment_account;

CREATE TABLE payment_account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_holder_name VARCHAR(255) NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL
);

INSERT INTO payment_account (card_holder_name, card_number, email, address, balance) VALUES
('John Doe', '1234567890123456', 'john.doe@example.com', '123 Main St', 1000.00),
('Jane Smith', '9876543210987654', 'jane.smith@example.com', '456 Oak St', 2000.00);

