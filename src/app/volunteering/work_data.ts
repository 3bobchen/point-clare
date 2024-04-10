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
  tag: string;
  tagLink: string;
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

export const work_data: WorkDataObject[] = [
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
    tag: "Not-for-Profit",
    tagLink: "",
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
  }
]