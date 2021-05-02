
INSERT INTO users (firstName, lastName, email, social, password) VALUES 
('Xuejin', 'Gao', 'xuejingao@gmail.com', 'https://linkedin.com/in/xuejingao', 'password'),
('prosoo', 'projin', 'proxuejingao@gmail.com', 'prohttps://linkedin.com/in/xuejingao', 'propassword');


INSERT INTO students (email, major, school) VALUES ('xuejingao@gmail.com', 'cs', 'hunter college');


INSERT INTO professionals (email, experience) VALUES ('proxuejingao@gmail.com', 5);


INSERT INTO companies(name, totalhours) VALUES ('Amazon', 10);


INSERT INTO worksAt(professionalemail, company, position) VALUES ('proxuejingao@gmail.com', 'Amazon', 'Junior Software Engineer');


INSERT INTO meetings (professionalEmail, studentEmail, date, time) VALUES ('proxuejingao@gmail.com', 'xuejingao@gmail.com', '2021-5-2', '09:30:00');


INSERT INTO pro_available(professionalemail, date, time) VALUES ('proxuejingao@gmail.com', '2021-5-6', '10:30:30'), ('proxuejingao@gmail.com', '2021-5-6', '11:30:30');

-- -- inset into student table
-- INSERT INTO 
--     students (
--         firstName,
--         lastName,
--         major,
--         school,
--         email,
--         social,
--         phone,
--         password
--   )
-- VALUES
--     (
--         'Xuejin',
--         'Gao',
--         'CS',
--         'Hunter College',
--         'xuejingao@gmail.com',
--         'https://linkedin.com/in/xuejingao',
--         '6466395009',
--         'password'
--     ),
--     (
--         'TestFirst',
--         'TestLast',
--         'TestMajor',
--         'TestSchool',
--         'TestEmail',
--         'TestSocial',
--         'TestPhone',
--         'TestPassword'
--     );

-- -- Insert into professional table
-- INSERT INTO 
--     professionals (
--         firstName,
--         lastName,
--         email,
--         social,
--         phone,
--         password
--     )
-- VALUES
--     (
--         'Pro_Xuejin',
--         'Pro_Gao',
--         'Pro_xuejingao@gmail.com',
--         'Pro_https://linkedin.com/in/xuejingao',
--         '6466395009',
--         'Pro_password'
--     ),
--     (
--         'Pro_TestName',
--         'Pro_TestLast',
--         'Pro_TestEmail',
--         'Pro_TestSocial',
--         'TestPhone',
--         'Pro_TestPassword'
--     );

-- -- Insert into meeting
-- INSERT INTO meetings(
--     studentEmail,
--     professionalEmail,
--     date,
--     time
-- )
-- VALUES 
--     (
--         'xuejingao@gmail.com',
--         'Pro_xuejingao@gmail.com',
--         '2021-1-1',
--         '09:30:00'
--     );

-- -- Insert into companies
-- INSERT INTO companies(
--     companyName,
--     totalCompanyHours,
-- )
-- VALUES 
--     (
--         'Amazon',
--         0
--     );

-- INSERT INTO worksAt(
--     companyName,
--     professionalEmail,
--     companyPosition
-- )
-- VALUES (
--     'Amazon',
--     'Pro_xuejingao@gmail.com',
--     'Junior Software Engineer'
-- );

-- INSERT INTO professionals_availTime(
--   meetingDate,
--   meetingTime,
--   professionalEmail
-- )
-- VALUES 
-- (
--   '2021-5-5',
--   '09:30:00',
--   'Pro_xuejingao@gmail.com'
-- );


-- SELECT * FROM meetings;
-- SELECT * FROM professionals_availTime;
-- SELECT * FROM companies;
-- SELECT * FROM worksAt;
-- SELECT * FROM students;
-- SELECT * FROM professionals;