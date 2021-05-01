-- CREATE DATABASE coffeechat;

DROP TABLE IF EXISTS meetings;
DROP TABLE IF EXISTS professionals_availTime;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS worksAt;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS professionals;

CREATE TABLE students(
    -- student_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- function that runs to create uuid
    studentName VARCHAR(64),
    studentMajor VARCHAR(64),
    studentSchool VARCHAR(64),
    studentEmail VARCHAR(64) UNIQUE,
    studentSocial VARCHAR(128),
    studentPhone VARCHAR(12),
    studentPassword VARCHAR(64),
    PRIMARY KEY (studentEmail)
);

CREATE TABLE professionals(
    -- professional_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- function that runs to create uuid
    professionalName VARCHAR(64),
    professionalEmail VARCHAR(64) UNIQUE,
    professionalSocial VARCHAR(128),
    professionalPhone VARCHAR(12),
    professionalPassword VARCHAR(64),
    PRIMARY KEY (professionalEmail)
);

CREATE TABLE meetings(
    meetingDate DATE,
    meetingTime TIME,
    studentEmail VARCHAR(64) UNIQUE,
    professionalEmail VARCHAR(64) UNIQUE,
    FOREIGN KEY (studentEmail)
        references students(studentEmail),
    FOREIGN KEY (professionalEmail)
        references professionals(professionalEmail)
    -- student_id uuid,
    -- professionals_id uuid,
    -- FOREIGN KEY (student_id)
    --     references students (student_id),
    -- FOREIGN KEY (professionals_id)
    --     references professionals (professional_id)
);

CREATE TABLE professionals_availTime(
    meetingDate DATE,
    meetingTime TIME,
    professionalEmail VARCHAR(64) UNIQUE,
    FOREIGN KEY (professionalEmail)
        references professionals(professionalEmail)
    -- professionals_id uuid,
    -- FOREIGN KEY (professionals_id)
    --     references professionals (professional_id)
);

CREATE TABLE companies(
    companyName VARCHAR(64),
    totalCompanyHours FLOAT,
    PRIMARY KEY (companyName)
)

CREATE TABLE worksAt(
    professionalEmail VARCHAR(64),
    companyName VARCHAR(64),
    companyPosition VARCHAR(64),
    FOREIGN KEY (professionalEmail)
        references professionals(professionalEmail),
    FOREIGN KEY (companyName)
        references companies(companyName)
)

-- inset into student table
INSERT INTO 
    students (
        studentName,
        studentMajor,
        studentSchool,
        studentEmail,
        studentSocial,
        studentPhone,
        studentPassword
    )
VALUES
    (
        'Xuejin',
        'CS',
        'Hunter College',
        'xuejingao@gmail.com',
        'https://linkedin.com/in/xuejingao',
        '6466395009',
        'password'
    ),
    (
        'TestName',
        'TestMajor',
        'TestSchool',
        'TestEmail',
        'TestSocial',
        'TestPhone',
        'TestPassword'
    );

-- Insert into professional table
INSERT INTO 
    professionals (
        professionalName,
        professionalEmail,
        professionalSocial,
        professionalPhone,
        professionalPassword
    )
VALUES
    (
        'Pro_Xuejin',
        'Pro_xuejingao@gmail.com',
        'Pro_https://linkedin.com/in/xuejingao',
        '6466395009',
        'Pro_password'
    ),
    (
        'Pro_TestName',
        'Pro_TestEmail',
        'Pro_TestSocial',
        'TestPhone',
        'Pro_TestPassword'
    );

-- Insert into meeting
INSERT INTO meetings(
    studentEmail,
    professionalEmail,
    meetingDate,
    meetingTime
)
VALUES 
    (
        'xuejingao@gmail.com',
        'Pro_xuejingao@gmail.com',
        '2021-1-1',
        '09:30:00'
    );