CREATE DATABASE coffeechat;

DROP TABLE IF EXISTS pro_available;
DROP TABLE IF EXISTS meetings;
DROP TABLE IF EXISTS worksAt;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS professionals;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    email VARCHAR(128) UNIQUE,
    social VARCHAR(128),
    password VARCHAR(128),
    PRIMARY KEY (email)
);

CREATE TABLE students(
    email VARCHAR(128),
    major VARCHAR(64),
    school VARCHAR(64),
    FOREIGN KEY (email)
        references users(email)
);

CREATE TABLE professionals(
    email VARCHAR(128),
    experience FLOAT,
    FOREIGN KEY (email)
        references users(email)
);

CREATE TABLE companies(
    name VARCHAR(64),
    totathours FLOAT,
    PRIMARY KEY (name)
);

CREATE TABLE worksAt(
    professionalemail VARCHAR(128),
    company VARCHAR(64),
    FOREIGN KEY (professionalemail)
        references users(email),
    FOREIGN KEY (company)
        references companies(name)
);

CREATE TABLE meetings(
    professionalemail VARCHAR(128),
    studentemail VARCHAR(128),
    date DATE,
    time TIME,
    FOREIGN KEY (professionalemail)
        references users(email),
    FOREIGN KEY (studentemail)
        references users(email)
);

CREATE TABLE pro_available(
    professionalEmail VARCHAR(128),
    date DATE,
    time TIME,
    FOREIGN KEY (professionalEmail)
        references users(email)
);


-- CREATE TABLE students(
--     -- id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- function that runs to create uuid
--     firstName VARCHAR(64),
--     lastName VARCHAR(64),
--     major VARCHAR(64),
--     school VARCHAR(64),
--     email VARCHAR(64) UNIQUE,
--     social VARCHAR(128),
--     phone VARCHAR(12),
--     password VARCHAR(64),
--     PRIMARY KEY (email)
-- );

-- CREATE TABLE professionals(
--     -- id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- function that runs to create uuid
--     firstName VARCHAR(64),
--     lastName VARCHAR(64),
--     email VARCHAR(64) UNIQUE,
--     social VARCHAR(128),
--     phone VARCHAR(12),
--     password VARCHAR(64),
--     PRIMARY KEY (email)
-- );

-- CREATE TABLE meetings(
--     date DATE,
--     time TIME,
--     studentEmail VARCHAR(64) UNIQUE,
--     professionalEmail VARCHAR(64) UNIQUE,
--     FOREIGN KEY (studentEmail)
--         references students(email),
--     FOREIGN KEY (professionalEmail)
--         references professionals(email)
--     -- student_id uuid,
--     -- professionals_id uuid,
--     -- FOREIGN KEY (student_id)
--     --     references students (id),
--     -- FOREIGN KEY (professionals_id)
--     --     references professionals (id)
-- );

-- CREATE TABLE professionals_availTime(
--     meetingDate DATE,
--     meetingTime TIME,
--     professionalEmail VARCHAR(64) UNIQUE,
--     FOREIGN KEY (professionalEmail)
--         references professionals(email)
--     -- professionals_id uuid,
--     -- FOREIGN KEY (professionals_id)
--     --     references professionals (professional_id)
-- );

-- CREATE TABLE companies(
--     -- company_id uuid PRIMARY KEY DEFAULT uuid_generate_v4()
--     companyName VARCHAR(64),
--     totalCompanyHours FLOAT,
--     PRIMARY KEY (companyName)
-- );

-- CREATE TABLE worksAt(
--     companyPosition VARCHAR(64),
--     -- company_id uuid,
--     -- FOREIGN KEY (company_id)
--     --     references companies (company_id)
--     -- professionals_id uuid,
--     -- FOREIGN KEY (professionals_id)
--     --     references professionals (professional_id)
--     professionalEmail VARCHAR(64),
--     companyName VARCHAR(64),
--     FOREIGN KEY (professionalEmail)
--         references professionals(email),
--     FOREIGN KEY (companyName)
--         references companies(companyName)
-- );