// DATA DUMMY

const projects = [];

function renderProjects() {
  const container = document.getElementById('projectList');

  let projectsHTML = '';

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    projectsHTML += `
        <div class="card">
            <div class="card-body">
                <h5>
                <i data-feather="user"></i>
                ${project.name}
                </h5>
                <p>${project.description}</p>
            </div>
        </div>`;
  }
  container.innerHTML = projectsHTML;

  feather.replace();
}

renderProjects();

// MENANGANI FORM SUBMIT
const form = document.getElementById('projectForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('projectName').value;
  const description = document.getElementById('fieldTextarea').value;

  const newProject = {
    id: projects.length + 1,
    name: name,
    description: description,
  };

  projects.push(newProject);
  renderProjects();

  form.reset();
});
