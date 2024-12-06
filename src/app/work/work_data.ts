export interface WorkDataObject {
  companyName: string;
  companyLogo: string;
  companyBlurb: string;
  companyWebsite: string;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null;
  location: string;
  roles: RoleObject[];
}

interface RoleObject {
  roleTitle: string;
  roleSubtitle: string;
  roleStartMonth: number;
  roleStartYear: number;
  roleEndMonth: number | null;
  roleEndYear: number | null;
  roleDescription: string;
  oneOff?: true;
}

export const work_data: WorkDataObject[] = [
  {
    companyName: "Macquarie Group",
    companyLogo: "https://static.brandirectory.com/logos/mace001_macquarie.jpg",
    companyBlurb: "Macquarie Group Limited is an Australian global financial services group.",
    companyWebsite: "https://www.macquarie.com.au/",
    startMonth: 12,
    startYear: 2023,
    endMonth: null,
    endYear: null,
    location: "Sydney, NSW, Australia",
    roles: [
      {
        roleTitle: "Software Engineer",
        roleSubtitle: "Associate",
        roleStartMonth: 2,
        roleStartYear: 2024,
        roleEndMonth: null,
        roleEndYear: null,
        roleDescription: ""
      },
      {
        roleTitle: "Tech, Digital and Data Intern",
        roleSubtitle: "",
        roleStartMonth: 12,
        roleStartYear: 2023,
        roleEndMonth: 2,
        roleEndYear: 2024,
        roleDescription: ""
      }
    ]
  },
  {
    companyName: "Open Law (Jade.io)",
    companyLogo: "/jade.png",
    companyBlurb: "The Open Law ecosystem contains a number of projects for enhancing access to law and increasing efficiency of legal practitioners and researchers.",
    companyWebsite: "https://openlaw.com.au/",
    startMonth: 5,
    startYear: 2021,
    endMonth: 11,
    endYear: 2023,
    location: "Sydney, NSW, Australia",
    roles: [
      {
        roleTitle: "Design, Software & Systems Engineer",
        roleSubtitle: "",
        roleStartMonth: 8,
        roleStartYear: 2023,
        roleEndMonth: 11,
        roleEndYear: 2023,
        roleDescription: ""
      },
      {
        roleTitle: "Junior System Engineer and Junior JADE Editor",
        roleSubtitle: "",
        roleStartMonth: 8,
        roleStartYear: 2022,
        roleEndMonth: 8,
        roleEndYear: 2023,
        roleDescription: ""
      },
      {
        roleTitle: "Junior Software Engineer",
        roleSubtitle: "",
        roleStartMonth: 5,
        roleStartYear: 2021,
        roleEndMonth: 8,
        roleEndYear: 2022,
        roleDescription: ""
      }
    ]
  },
  {
    companyName: "NSW Electoral Commission",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/NSW_Electoral_Commission_logo.svg/800px-NSW_Electoral_Commission_logo.svg.png",
    companyBlurb: "The NSWEC is legislated to conduct, regulate and report on elections on behalf of the people of New South Wales.",
    companyWebsite: "https://elections.nsw.gov.au/",
    startMonth: 2,
    startYear: 2021,
    endMonth: 4,
    endYear: 2021,
    location: "The Hills, NSW, Australia",
    roles: [
      {
        roleTitle: "Declaration Voting and Information Officer",
        roleSubtitle: "2023 NSW State Election",
        roleStartMonth: 3,
        roleStartYear: 2023,
        roleEndMonth: null,
        roleEndYear: null,
        oneOff: true,
        roleDescription: ""
      },
      {
        roleTitle: "Declaration Voting and Information Officer",
        roleSubtitle: "2021 NSW Local Elections",
        roleStartMonth: 12,
        roleStartYear: 2021,
        roleEndMonth: null,
        roleEndYear: null,
        oneOff: true,
        roleDescription: ""
      }
    ]
  },
  {
    companyName: "Volt Bank",
    companyLogo: "https://www.bankingday.com/uploads/2022/Q3/Volt-logo-August2022.png",
    companyBlurb: "Volt Bank was an Australian consumer neobank, the first such bank to be issued with a restricted ADI licence by APRA.",
    companyWebsite: "https://en.wikipedia.org/wiki/Volt_Bank",
    startMonth: 2,
    startYear: 2022,
    endMonth: 7,
    endYear: 2022,
    location: "North Sydney, NSW, Australia",
    roles: [
      {
        roleTitle: "IT Operations Intern",
        roleSubtitle: "",
        roleStartMonth: 2,
        roleStartYear: 2022,
        roleEndMonth: 7,
        roleEndYear: 2022,
        roleDescription: ""
      }
    ]
  },
  {
    companyName: "Voly",
    companyLogo: "https://imageresizer.static9.net.au/ubIGHnc9KUoQmbd3JWRybtRVglQ=/259x0:1378x746/750x422/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F5cb2c612-acf1-4357-87b1-eabcc946e622",
    companyBlurb: "Voly was Australia’s first on-demand supermarket delivering groceries in minutes.",
    companyWebsite: "https://www.linkedin.com/company/getvoly/about/",
    startMonth: 11,
    startYear: 2021,
    endMonth: 2,
    endYear: 2022,
    location: "Bondi, NSW, Australia",
    roles: [
      {
        roleTitle: "Rider",
        roleSubtitle: "",
        roleStartMonth: 11,
        roleStartYear: 2021,
        roleEndMonth: 2,
        roleEndYear: 2022,
        roleDescription: ""
      }
    ]
  }
]