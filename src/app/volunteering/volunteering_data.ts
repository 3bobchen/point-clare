export interface VolunteeringDataObject {
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
}

export const volunteering_data: VolunteeringDataObject[] = [
  {
    companyName: "Software Development Society",
    companyLogo: "/devsoc.png",
    companyBlurb: "DevSoc is a registered not-for-profit and UNSW Arc affiliated student society running services and programs that furthers student experience and learning.",
    companyWebsite: "https://devsoc.app/",
    startMonth: 10,
    startYear: 2023,
    endMonth: null,
    endYear: null,
    location: "Kensington, NSW, Australia",
    roles: [
      {
        roleTitle: "Co-President",
        roleSubtitle: "",
        roleStartMonth: 10,
        roleStartYear: 2023,
        roleEndMonth: null,
        roleEndYear: null,
        roleDescription: ""
      }
    ]
  },
  {
    companyName: "UNSW Fintech Society",
    companyLogo: "https://framerusercontent.com/images/3jO1MjVcyxB6v1n5bd8IPcRPLI.png",
    companyBlurb: "FinTech Soc is the pillar for representing the future of financial technologies and seasons of change within the university environment.",
    companyWebsite: "https://devsoc.app/",
    startMonth: 2,
    startYear: 2022,
    endMonth: 11,
    endYear: 2023,
    location: "Kensington, NSW, Australia",
    roles: [
      {
        roleTitle: "Co-President",
        roleSubtitle: "",
        roleStartMonth: 11,
        roleStartYear: 2022,
        roleEndMonth: 11,
        roleEndYear: 2023,
        roleDescription: ""
      },
      {
        roleTitle: "Events Director",
        roleSubtitle: "",
        roleStartMonth: 2,
        roleStartYear: 2022,
        roleEndMonth: 11,
        roleEndYear: 2022,
        roleDescription: ""
      }
    ]
  },
  {
    companyName: "Computer Science Engineering Society",
    companyLogo: "https://cdn-static.revolutionise.com.au/assets/images/unsw-csesoc.png",
    companyBlurb: "CSESoc is one of the biggest and most active societies at UNSW, catering to over 3500 CSE students spanning across degrees in Computer Science.",
    companyWebsite: "https://devsoc.app/",
    startMonth: 2,
    startYear: 2021,
    endMonth: 11,
    endYear: 2023,
    location: "Kensington, NSW, Australia",
    roles: [
      {
        roleTitle: "Project Lead - Freerooms",
        roleSubtitle: "",
        roleStartMonth: 11,
        roleStartYear: 2022,
        roleEndMonth: 11,
        roleEndYear: 2023,
        roleDescription: ""
      },
      {
        roleTitle: "Creative Subcommittee",
        roleSubtitle: "",
        roleStartMonth: 2,
        roleStartYear: 2021,
        roleEndMonth: 11,
        roleEndYear: 2021,
        roleDescription: ""
      }
    ]
  }
]