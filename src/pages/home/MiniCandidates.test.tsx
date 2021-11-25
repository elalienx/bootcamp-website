// NPM packages
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Project file
import MiniCandidates from "./MiniCandidates";

// Mockup candidates
const oneCandidate = [
  {
    id: 7,
    name: "Marcela F",
    url: "marcela-f",
    city: "Stockholm",
    willing_to_relocate: false,
    description:
      "Marcela holds a Master of Science in Genetics and Molecular Biology. Marcela has worked in the Healthcare sector for several years and now she wants to change her career to become a Software Developer. Marcela is determined, focused and motivated as a person. Marcela is an open and honest person who loves to help others.",
    portofolio_url: "https://marcelaf-portfolio.web.app/",
    education: [
      {
        period: "2021",
        title: "Intensive Frontend course",
        institution: "Novare Potential",
        city_and_country: "Sweden",
      },
      {
        period: "2021",
        title: "Software Development Academy",
        institution: "KTH",
        city_and_country: "Sweden",
      },
      {
        period: "2020",
        title: "Vue Vixens Web Development",
        institution: "Emms Tech.",
        city_and_country: "Sweden",
      },
      {
        period: "2015",
        title: "Master of Science – Genetics and Molecular Biology",
        institution: "Federal University Rio Grande do Sol ",
        city_and_country: "Brazil",
      },
    ],
    work_experience: [
      {
        period: "2016 - 2020",
        title: "Clinical Embryologist",
        institution: "Livio Fertilitetscentrum",
        city_and_country: "Sweden",
      },
      {
        period: "2011 - 2015",
        title: "Clinical Embryologist",
        institution: "Human Production Center Nilo Frantz",
        city_and_country: "Brazil",
      },
    ],
    tech_skills: [
      {
        name: "HTML/CSS",
        rating: 2,
      },
      {
        name: "Typescript",
        rating: 1,
      },
      {
        name: "JavaScript",
        rating: 2,
      },
      {
        name: "Node.js",
        rating: 1,
      },
      {
        name: "SASS",
        rating: 1,
      },
      {
        name: "React",
        rating: 2,
      },
      {
        name: "Scrum",
        rating: 2,
      },
      {
        name: "Spring",
        rating: 2,
      },
      {
        name: "Vue.js",
        rating: 2,
      },
      {
        name: "Firebase",
        rating: 2,
      },
    ],
    languages_spoken: [
      {
        name: "English",
        rating: 5,
      },
      {
        name: "Portuguese",
        rating: 5,
      },
      {
        name: "Swedish",
        rating: 3,
      },
    ],
  },
];
const threeCandidates = [
  {
    id: 1,
    name: "Armin D",
    url: "armin-d",
    city: "Stockholm",
    willing_to_relocate: false,
    description:
      "Armin is a skilled Frontend developer and blockchain enthusiast. He obtains good skills in programming and has a background in the IT-Business. As a person he is positive, driven and likeable. His passion for graphic design and software development drives him to do self-studies and training to be able to work in the domain that he thrives in.",
    portofolio_url: "https://armin-dizdar-portofolio.web.app",
    education: [
      {
        period: "2021",
        title: "Intensive Frontend Course",
        institution: "Novare Potential",
        city_and_country: "Stockholm, Sweden",
      },
      {
        period: "2021",
        title: "Web Development .NET Course",
        institution: "Lexicon",
        city_and_country: "Not specified",
      },
      {
        period: "2017",
        title: "Software Development Academy of KTH",
        institution: "Intensive course focusing on Java - KTH",
        city_and_country: "Stockholm, Sweden",
      },
      {
        period: "2021",
        title: "Business Information degree",
        institution: "Completed 2 years from University Apeiron",
        city_and_country: "Apeiron, Bosnia",
      },
    ],
    work_experience: [
      {
        period: "2020 - present",
        title: "Frontend Developer intership",
        institution: "Beeanco",
        city_and_country: "Vienna, Austria",
      },
      {
        period: "2018 - 2020",
        title: "Shipping Specialist",
        institution: "Webhallen AB",
        city_and_country: "Stockholm, Sweden",
      },
    ],
    tech_skills: [
      {
        name: ".NET",
        rating: 1,
      },
      {
        name: "React",
        rating: 2,
      },
      {
        name: "SASS",
        rating: 2,
      },
      {
        name: "HTML/CSS",
        rating: 2,
      },
      {
        name: "Java",
        rating: 2,
      },
      {
        name: "Jenkins",
        rating: 2,
      },
      {
        name: "Linux",
        rating: 2,
      },
      {
        name: "Typescript",
        rating: 2,
      },
      {
        name: "Azure cloud",
        rating: 2,
      },
      {
        name: "Firebase",
        rating: 2,
      },
      {
        name: "Javascript",
        rating: 2,
      },
    ],
    languages_spoken: [
      {
        name: "English",
        rating: 3,
      },
      {
        name: "Swedish",
        rating: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Clement C",
    url: "clement-c",
    city: "Stockholm",
    willing_to_relocate: false,
    description:
      "Clément holds a Master in Architecture and has been working as an architect for 6 years. Programming is his passion and now he wants to pursue a career as a developer. Clément is a creative problem solver who loves challenges and to go out of his comfort zone. With his social personality and positive attitude, he is a true team-player. ",
    portofolio_url: "https://www.clecardona.com",
    education: [
      {
        period: "2021",
        title: "Intensive Frontend Course",
        institution: "Novare Potential",
        city_and_country: "Sweden",
      },
      {
        period: "2021",
        title: "Software Development Academy",
        institution: "KTH",
        city_and_country: "Sweden",
      },
      {
        period: "2013",
        title: "Master in Architecture",
        institution: "INSA Strasbourg",
        city_and_country: "France",
      },
    ],
    work_experience: [
      {
        period: "2020 - Present",
        title: "Rider Captain",
        institution: "Fodora",
        city_and_country: "Sweden",
      },
      {
        period: "2019 - 2020",
        title: "Bicycle courier",
        institution: "Fodora",
        city_and_country: "Sweden",
      },
      {
        period: "2013-2019",
        title: "Architect",
        institution: "ONArchitecture",
        city_and_country: "France",
      },
    ],
    tech_skills: [
      {
        name: "Autocad",
        rating: 4,
      },
      {
        name: "SASS",
        rating: 2,
      },
      {
        name: "HTML",
        rating: 2,
      },
      {
        name: "Java",
        rating: 2,
      },
      {
        name: "JavaScript",
        rating: 3,
      },
      {
        name: "Typescript",
        rating: 2,
      },
      {
        name: "PHP",
        rating: 2,
      },
      {
        name: "React",
        rating: 3,
      },
      {
        name: "Firebase",
        rating: 2,
      },
      {
        name: "CSS",
        rating: 2,
      },
    ],
    languages_spoken: [
      {
        name: "English",
        rating: 5,
      },
      {
        name: "French",
        rating: 5,
      },
      {
        name: "Swedish",
        rating: 3,
      },
    ],
  },
  {
    id: 4,
    name: "Emmanuel I",
    url: "emmanuel-i",
    city: "Halmstad",
    willing_to_relocate: true,
    description:
      "Emmanuel has a Bachelor’s Degree in Computer Science and a Master’s Degree in Computer System Engineering. Emmanuel has working experience as a Web developer in Sweden. He possesses great skills in C#/.NET, Java and Scrum methodology. Emmanuel is an analytical and customer-focused software developer. He is a great team player who loves challenges. Emmanuel would be an asset to have in any team.",
    portofolio_url: "https://emmanuel-1eea2.web.app/",
    education: [
      {
        period: "2021",
        title: "Intensive Frontend course",
        institution: "Novare Potential",
        city_and_country: "Sweden",
      },
      {
        period: "2020",
        title: "Software Development Academy",
        institution: "KTH",
        city_and_country: "Sweden",
      },
      {
        period: "2015",
        title: "Vocational training in Web development with .NET",
        institution: "EC Utbildning",
        city_and_country: "Helsingborg, Sweden",
      },
      {
        period: "2011",
        title: "Master’s Degree in Computer System Engineering",
        institution: "Halmstad University",
        city_and_country: "Halmstad, Sweden",
      },
      {
        period: "2006",
        title: "Bachelor’s Degree in Computer Science",
        institution: "Ambrose Alli University",
        city_and_country: "Ekpoma, Nigeria",
      },
    ],
    work_experience: [
      {
        period: "2016 - 2017",
        title: "Web Developer",
        institution: "Webbyrån Petra",
        city_and_country: "Helsingborg, Sweden",
      },
      {
        period: "2014 - 2015",
        title: "Web & System Developer Trainee",
        institution: "HemoCue AB",
        city_and_country: "Ängelholm, Sweden",
      },
    ],
    tech_skills: [
      {
        name: "C",
        rating: 2,
      },
      {
        name: "C#/.NET",
        rating: 3,
      },
      {
        name: "Firebase",
        rating: 2,
      },
      {
        name: "HTML/CSS",
        rating: 3,
      },
      {
        name: "Java",
        rating: 3,
      },
      {
        name: "Typescript",
        rating: 2,
      },
      {
        name: "SASS",
        rating: 1,
      },
      {
        name: "SQL",
        rating: 3,
      },
      {
        name: "UX/UI",
        rating: 3,
      },
      {
        name: "React",
        rating: 2,
      },
      {
        name: "Javascript",
        rating: 2,
      },
    ],
    languages_spoken: [
      {
        name: "English",
        rating: 4,
      },
      {
        name: "Swedish",
        rating: 2,
      },
      {
        name: "Ishan",
        rating: 5,
      },
    ],
  },
];

// shows an error message if there is less than 3 candidates
test("shows an error message if there is less than 3 candidates", () => {
  // Arrange
  render(
    <BrowserRouter>
      <MiniCandidates candidates={oneCandidate} />
    </BrowserRouter>
  );

  // Act
  const errorMessage = screen.queryByText(
    /we don't have candidates to present/i
  );

  // Assert
  expect(errorMessage).toBeInTheDocument();
});

test("render 3 items when the array is valid", () => {
  // Arrange
  render(
    <BrowserRouter>
      <MiniCandidates candidates={threeCandidates} />
    </BrowserRouter>
  );

  // Act
  const name1 = screen.queryByText(/armin/i);
  const name2 = screen.queryByText(/clement/i);
  const name3 = screen.queryByText(/emmanuel/i);

  // Assert
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(name3).toBeInTheDocument();
});
