document
  .getElementById("changeContentBtn")
  .addEventListener("click", changeContent);

let currentIndex = 0;

const roles = [
  {
    title: "Buying house",
    description:
      "At AussieTex, we bridge the gap between retailers and manufacturers, managing the entire sourcing process—from supplier selection and price negotiation to order management and quality control. We ensure products meet high standards and are delivered on time, simplifying procurement for our clients while maintaining strong relationships with buyers and suppliers.",
    imgSrc: "./images/men.png",
    tabId: "tab1",
  },
  {
    title: "Importer",
    description:
      "As an importer, we bring high-quality products from manufacturers across the globe. Our logistics team ensures smooth customs clearance and timely delivery, giving our clients a reliable partner in international trade.",
    imgSrc: "./images/men.png",
    tabId: "tab2",
  },
  {
    title: "Supplier",
    description:
      "In our role as a supplier, we focus on delivering quality products to retailers, ensuring that every product meets industry standards and client expectations. Our wide network of manufacturers enables us to meet diverse needs.",
    imgSrc: "./images/men.png",
    tabId: "tab3",
  },
];

function changeContent() {
  currentIndex = (currentIndex + 1) % roles.length;

  document.getElementById("roleImg").src = roles[currentIndex].imgSrc;

  document.getElementById("roleTitle").textContent = roles[currentIndex].title;

  document.getElementById("roleDescription").textContent =
    roles[currentIndex].description;

  updateTabHighlight(roles[currentIndex].tabId);
}

function updateTabHighlight(activeTabId) {
  // remove active class
  const tabs = document.querySelectorAll(".role_singlepoint");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // add active class
  document.getElementById(activeTabId).classList.add("active");
}

document.getElementById("tab1").classList.add("active");
