-- Create a Company
INSERT INTO companies(name, totalHours) VALUES ('Amazon', 50);
INSERT INTO companies(name, totalHours) VALUES ('Google', 60);
INSERT INTO companies(name, totalHours) VALUES ('Facebook', 10);

-- When registering Student user
INSERT INTO users (name, email, social, password) VALUES ('John Smith', 'js@gmail.com', 'js.com', 'pass');
INSERT INTO students(id) VALUES ((SELECT id FROM users WHERE email = 'js@gmail.com'));

-- Registering a Pro user
INSERT INTO users (name, email, social, password) VALUES ('PRO John Smith', 'PROjs@gmail.com', 'PROjs.com', 'PROpass');
INSERT INTO professionals(id) VALUES((SELECT id FROM users WHERE email = 'PROjs@gmail.com'));
INSERT INTO worksAt(pro_id, company_id, position) VALUES (
  (SELECT id FROM users WHERE email = 'PROjs@gmail.com'),
  (SELECT id FROM companies WHERE name = 'Amazon'),
  'SWE'
  );

-- Pro setting schedule
INSERT INTO proAvailability(pro_id, date, time) VALUES (
    (SELECT id FROM users WHERE email = 'PROjs@gmail.com'),
    '2021-5-5',
    '09:30:30'
  );
INSERT INTO proAvailability(pro_id, date, time) VALUES (
    (SELECT id FROM users WHERE email = 'PROjs@gmail.com'),
    '2021-5-5',
    '10:30:30'
  );

-- Create a meeting
-- We still need to remove the proavailability 
INSERT INTO meetings(student_id, pro_id, date, time) VALUES (
  (SELECT id FROM users WHERE email = 'js@gmail.com'),
  (SELECT id FROM users WHERE email = 'PROjs@gmail.com'),
  '2021-5-5',
  '09:30:00'
  );

