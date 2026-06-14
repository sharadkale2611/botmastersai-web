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