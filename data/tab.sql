BEGIN;

DROP TABLE IF EXISTS appointments, buyers, vendors, users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
INSERT INTO users (name) VALUES ('buyers');
INSERT INTO users (name) VALUES ('vendors');
CREATE TABLE vendors (
    vendor_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
INSERT INTO vendors (name, user_id) VALUES ('Louis Vuitton', 1);
INSERT INTO vendors (name, user_id) VALUES ('Gucci', 2);
CREATE TABLE buyers (
    buyer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
INSERT INTO buyers (name, company_name, user_id) VALUES ('Louis', 'FakeCompany 1', 1);
INSERT INTO buyers (name, company_name, user_id) VALUES ('Yves', 'FakeCompany 2', 1);
CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    customer VARCHAR(50) NOT NULL,
    location VARCHAR(255),
    type VARCHAR(50) NOT NULL CHECK (type IN ('virtual', 'physical')),
    title VARCHAR(255) NOT NULL,
    host_id INT, --vendors
    client_id INT,--buyers
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    CONSTRAINT fk_host FOREIGN KEY (host_id) REFERENCES vendors(vendor_id),
    CONSTRAINT fk_client FOREIGN KEY (client_id) REFERENCES buyers(buyer_id)
);
INSERT INTO appointments 
(title, customer, type, location, host_id, client_id, start_time, end_time)
VALUES
 ('Showroom évènements à venir','HOST', 'physical', 'Emplacement du rendez-vous', 1, 1, '2024-03-17 10:00:00', '2024-03-17 11:00:00');
COMMIT;
