CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    FullName VARCHAR(100) NOT NULL,

    Email VARCHAR(100) NOT NULL UNIQUE,

    PasswordHash VARCHAR(255) NOT NULL,

    Role VARCHAR(20) NOT NULL DEFAULT 'Admin',

    IsActive BOOLEAN NOT NULL DEFAULT TRUE,

    LastLoginAt DATETIME NULL,

    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users
(
    FullName,
    Email,
    PasswordHash,
    Role
)
VALUES
(
    'Super Administrator',
    'botmastersai@gmail.com',
    '$2b$10$QeVg3wgAcYAcgn/kVLd8N.zMHL2EV2nM1A2U9jbAiYcoiB8FtpACa',
    'SuperAdmin'
);



CREATE TABLE UserSessions (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    UserId INT NOT NULL,

    Token VARCHAR(255) NOT NULL,

    ExpiresAt DATETIME NOT NULL,

    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(UserId)
    REFERENCES Users(Id)
);

CREATE TABLE InternshipApplications (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    InternshipProgram VARCHAR(100),
    PreferredStack VARCHAR(100),

    FullName VARCHAR(100),
    Email VARCHAR(100),
    Mobile VARCHAR(20),
    City VARCHAR(100),
    Gender VARCHAR(20),

    CollegeName VARCHAR(200),
    Degree VARCHAR(100),
    PassingYear INT,
    ExperienceLevel VARCHAR(50),

    PreviousExperience TEXT,

    IsInformationCorrect BOOLEAN,
    IsCommunicationAllowed BOOLEAN,
    IsPrivacyAccepted BOOLEAN,

    ResumePath VARCHAR(255),

    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Enquiries (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Mobile VARCHAR(20) NOT NULL,

    Subject VARCHAR(100) NOT NULL,

    Message TEXT NOT NULL,

    Status VARCHAR(20) NOT NULL DEFAULT 'Pending',

    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);