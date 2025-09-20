export interface EssayObject {
  title: string;
  subtitle: string;
  imageURL: string;
  imageCredit: string;
  tag: string;
  essayFilepath: string;
  url: string;
}

const essays: EssayObject[] = [
  {
    title: "Packed, Stacked and Attacked",
    subtitle:
      "The importance of administrative tribunal reform that learns from the past and sufficiently protects member independence",
    imageURL:
      "https://agsci.oregonstate.edu/sites/agscid7/files/files/artwork/2002-06sandgren.jpg",
    imageCredit: "Imagery: A PRAGMATIC POETRY OF MIST, Erik Sandgren",
    tag: "Law",
    essayFilepath: "/essays/art.pdf",
    url: "",
  },
  {
    title: "Central Bank Digital Currencies",
    subtitle:
      "The new balance between privacy and access in the digital economy",
    imageURL:
      "https://i.pinimg.com/736x/5a/14/8b/5a148b6847922461b5bb93abdb244185.jpg",
    imageCredit: "Imagery: Cubist 7p, Thomas C. Fedro",
    tag: "Computer Science",
    essayFilepath: "/essays/cbdcs.pdf",
    url: "",
  },
  {
    title:
      "Could an artificially intelligent device practise as a barrister in NSW?",
    subtitle: "",
    imageURL:
      "https://media.thepeakmagazine.com.sg/public/2019/02/AI-creativity-paintings.jpg?compress=true&quality=80&w=1080&dpr=1",
    imageCredit: "Imagery: Righteous Anger, Ellen Downing",
    tag: "Law",
    essayFilepath: "",
    url: "https://www.suls.org.au/citations-blog/2023/5/11/could-an-artificially-intelligent-device-practise-as-a-barrister-in-nsw",
  },
  {
    title: "I am, You are, We are Australian",
    subtitle: "Indigenous settlement in a modern settler state",
    imageURL:
      "https://www.kabgallery.com/system/wp-content/uploads/2016/01/%E2%80%9CBeach-Study-1-4.9.15-Plein-Air%E2%80%9D-45x45cm-oil-on-canvas-1500x1200.jpeg",
    imageCredit: "Imagery: Beach Study, Sally West",
    tag: "Law",
    essayFilepath: "/essays/lst.pdf",
    url: "",
  },
];

export default essays;
