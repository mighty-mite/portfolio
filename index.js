const data = {
  name: "Ayur Tushinov",
  education: [
    "Electrical Engineering - Moscow State Mining University, 2008",
    "FrontEnd Development - Rolling Scope School, 2023",
  ],
  locations: ["Moscow Russia", "Ulaanbaatar Mongolia"],
  currentLocation: "Moscow Russia",
  skills: [
    "HTML5",
    "CSS",
    "SASS",
    "JavaScript",
    "Typescript",
    "React",
    "Redux",
    "Git",
  ],
  resume: "ayur_tushinov's_resume.pdf",
  contacts: ["LinkedIn", "Telegram", "tushinov.ayur@gmail.com", "Github"],
};

const text = "Ayur Tushinov";
const selftypeContainer = document.querySelector(".selftype__container");
const cursor = document.querySelector(".selftype__cursor");
let i = 0;

function setSelfTypingText() {
  if (i < text.length) {
    selftypeContainer.append(text[i]);
    i++;
    setTimeout(setSelfTypingText, 100);
  }
}

setInterval(() => {
  cursor.style.color === "transparent"
    ? "rgba(116, 127, 224, 0.65)"
    : "transparent";
}, 50);

setTimeout(setSelfTypingText, 2000);
