CREATE DATABASE coffee_chat;

CREATE TABLE cc_users(
    username VARCHAR(64) NOT NULL,
    user_email VARCHAR(64) NOT NULL,
    user_password VARCHAR(64) NOT NULL,
    isStudent BOOLEAN --make not null
);

CREATE TABLE students();

CREATE TABLE professionals();

CREATE TABLE meetings();

INSERT INTO cc_users(username, user_email, user_password) VALUES ('John S','john@gmail.com','mypass')