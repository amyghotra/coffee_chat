CREATE DATABASE coffee_chat;

CREATE extension if not exists "uuid-ossp";

CREATE TABLE cc_users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(64) NOT NULL,
    user_email VARCHAR(64) NOT NULL,
    user_password VARCHAR(64) NOT NULL,
    is_student BOOLEAN NOT NULL,
    prof_company VARCHAR(64),
    pro_role VARCHAR(64)
);

CREATE TABLE students(
    student_id VARCHAR(128) PRIMARY KEY NOT NULL,
    student_name VARCHAR(64) NOT NULL,
    student_email VARCHAR(64) NOT NULL,
    student_school VARCHAR(64),
    student_major VARCHAR(64),
    student_social VARCHAR(128),
    student_password VARCHAR(64) NOT NULL
);

CREATE TABLE professionals(
    pro_id VARCHAR(128) PRIMARY KEY NOT NULL,
    pro_name VARCHAR(64) NOT NULL,
    pro_email VARCHAR(64) NOT NULL,
    pro_company VARCHAR(64),
    pro_role VARCHAR(64),
    pro_social VARCHAR(128),
    pro_password VARCHAR(64) NOT NULL
);

CREATE TABLE meetings(
    student_id VARCHAR(128),
    pro_id VARCHAR(128),
    date DATE,
    time TIME,
    FOREIGN KEY (student_id) references students(student_id),
    FOREIGN KEY (pro_id) references professionals(pro_id)
);

CREATE TABLE proAvailability(
    pro_id VARCHAR(128),
    date DATE,
    time TIME,
    FOREIGN KEY (pro_id) references professionals(pro_id)
);

CREATE TABLE companies(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(64),
    totalHours FLOAT
);

CREATE TABLE worksAt(
    pro_id VARCHAR(128),
    company_id uuid,
    position VARCHAR(64),
    FOREIGN KEY (pro_id) references professionals(pro_id),
    FOREIGN KEY (company_id) references companies(id)
);




INSERT INTO cc_users(username, user_email, user_password, is_student) VALUES ('John S','john@gmail.com','mypass', 'true');