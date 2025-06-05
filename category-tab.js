document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".project-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Reset all tabs
      tabs.forEach(t => {
        t.classList.remove("active-tab", "bg-gray-900", "text-white", "font-semibold", "shadow-md");
        t.classList.add("bg-gray-200", "text-gray-700", "font-medium");
      });

      // Style the clicked one
      tab.classList.add("active-tab", "bg-gray-900", "text-white", "font-semibold", "shadow-md");
      tab.classList.remove("bg-gray-200", "text-gray-700", "font-medium");

      // Filter projects
      const selected = tab.getAttribute("data-category");
      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        card.classList.toggle("hidden", selected !== "all" && cat !== selected);
      });
    });
  });
});
