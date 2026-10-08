const projectsToggle = document.querySelector("#projects-toggle");
const moreProjects = document.querySelector("#more-projects");

document.querySelectorAll("[data-current-year]").forEach((year) => {
    year.textContent = new Date().getFullYear();
});

if (projectsToggle && moreProjects) {
    projectsToggle.addEventListener("click", () => {
        const isExpanded = projectsToggle.getAttribute("aria-expanded") === "true";

        projectsToggle.setAttribute("aria-expanded", String(!isExpanded));
        moreProjects.classList.toggle("is-expanded", !isExpanded);
        moreProjects.setAttribute("aria-hidden", String(isExpanded));
        moreProjects.inert = isExpanded;
        projectsToggle.querySelector("span").textContent = isExpanded
            ? "View All Projects"
            : "Show Less";

        const arrow = projectsToggle.querySelector("i");
        arrow.classList.toggle("bi-arrow-right", isExpanded);
        arrow.classList.toggle("bi-arrow-up", !isExpanded);
    });
}
