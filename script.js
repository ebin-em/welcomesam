const roomDesigns = {
  "2bhk": [
    {
      title: "Compact Modern 2BHK",
      description: "Open living-dining layout with warm wood finishes and hidden storage.",
      image:
        "https://images.unsplash.com/photo-1616594039964-3e18bd8b4b01?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Scandinavian Light 2BHK",
      description: "Bright neutral interiors, soft fabrics, and multi-purpose furniture.",
      image:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Urban Family 2BHK",
      description: "Smart bedroom zoning, cozy kids room, and efficient utility corner.",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80",
    },
  ],
  "4bhk": [
    {
      title: "Luxury Contemporary 4BHK",
      description: "Grand living space with statement lighting and premium marble textures.",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Classic Premium 4BHK",
      description: "Elegant paneling, spacious master suite, and formal dining experience.",
      image:
        "https://images.unsplash.com/photo-1617104681463-5f22e4d4b1f8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Minimal Luxe 4BHK",
      description: "Large open-plan interiors with clean lines, textures, and ambient lighting.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

const roomButtons = document.querySelectorAll(".room-option");
const designGrid = document.getElementById("room-design-grid");

function renderDesigns(roomType) {
  const designs = roomDesigns[roomType] || [];

  designGrid.innerHTML = designs
    .map(
      (design) => `
      <article class="card">
        <img src="${design.image}" alt="${design.title}" />
        <h3>${design.title}</h3>
        <p>${design.description}</p>
      </article>
    `,
    )
    .join("");
}

roomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roomButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderDesigns(button.dataset.room);
  });
});

renderDesigns("2bhk");
