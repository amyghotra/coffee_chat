CREATE DATABASE users;

CREATE TABLE students(
    student_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- function that runs to create uuid
    studentName VARCHAR(64),
    studentMajor VARCHAR(64),
    studentSchool VARCHAR(64),
    studentEmail VARCHAR(64) UNIQUE,
    studentSocial VARCHAR(128),
    studentPhone    INT,
    studentPassword VARCHAR(64)
);

CREATE TABLE professionals