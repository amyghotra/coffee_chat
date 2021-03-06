CREATE DATABASE coffeechat;

DROP TABLE if exists users CASCADE;
DROP TABLE if exists students CASCADE;
DROP TABLE if exists professionals CASCADE;
DROP TABLE if exists meetings CASCADE;
DROP TABLE if exists proAvailability CASCADE;
DROP TABLE if exists companies CASCADE;
DROP TABLE if exists worksAt CASCADE;


CREATE extension if not exists "uuid-ossp";

CREATE TABLE users(
    id uuid PRIMARY KEY UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    social VARCHAR(64),
    password VARCHAR(64) NOT NULL
);

CREATE TABLE students(
    id uuid,
    school VARCHAR(64),
    major VARCHAR(64),
    FOREIGN KEY (id) references users(id)
);

CREATE TABLE professionals(
    id uuid,
    experience INT,
    FOREIGN KEY (id) references users(id)
);

CREATE TABLE meetings(
    student_id uuid,
    pro_id uuid,
    date DATE,
    time TIME,
    FOREIGN KEY (student_id) references users(id),
    FOREIGN KEY (pro_id) references users(id)
);

CREATE TABLE proAvailability(
    pro_id uuid,
    date DATE,
    time TIME,
    FOREIGN KEY (pro_id) references users(id)
);

CREATE TABLE companies(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    company VARCHAR(64),
    totalHours FLOAT
);

CREATE TABLE worksAt(
    pro_id uuid,
    company_id uuid,
    position VARCHAR(64),
    FOREIGN KEY (pro_id) references users(id),
    FOREIGN KEY (company_id) references companies(id)
);


