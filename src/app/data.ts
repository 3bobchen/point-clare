export interface ActivityObject {
  title: string;
  subtitle: string;
  url: string;
  icon: string;
}

export const activities: ActivityObject[] = [
  {
    title: "Packed, Stacked and Attacked",
    subtitle: "The importance of administrative tribunal reform that learns from the past and sufficiently protects member independence",
    url: "/essays/art.pdf",
    icon: "e"
  },
  {
    title: "Central Bank Digital Currencies",
    subtitle: "The new balance between privacy and access in the digital economy",
    url: "/essays/cbdcs.pdf",
    icon: "e"
  },
  {
    title: "Google Cloud Digital Leader",
    subtitle: "",
    url: "https://www.linkedin.com/posts/3bobchen_googlecloud-gcp-certified-activity-7156194696598319104-Jr9J?utm_source=share&utm_medium=member_desktop",
    icon: "a"
  },
]

export const findOutMore = [
  {
    image: "li",
    name: "LinkedIn",
    subtitle: "@3bobchen",
    link: "https://www.linkedin.com/in/3bobchen/",
    icon: "a"
  },
  {
    image: "cv",
    name: "Resume",
    subtitle: "",
    link: "/cv.pdf",
    icon: "a"
  }
]
