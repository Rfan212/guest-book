const projects = [];

function renderProjects() {
  const container = document.getElementById('projectList');

  let projectsHTML = '';

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    projectsHTML += `
    <li class="card">
     <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">
              <h5>
                  <i data-feather="user"></i>
                  ${project.name}
              </h5>
          </li>

          <li class="list-group-item">
              ${project.description}
          </li>
      </ul>
      </div>
    </li>`;
  }
  container.innerHTML = projectsHTML;

  feather.replace();
}

renderProjects();

// MENANGANI FORM SUBMIT
const form = document.getElementById('projectForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('projectName').value.trim();
  const description = document.getElementById('fieldTextarea').value.trim();

  if (name === '' || description === '') {
    alert('Harap jangan sampai kosong!');
    return;
  }

  const newProject = {
    id: projects.length + 1,
    name: name,
    description: description,
  };

  projects.push(newProject);
  renderProjects();

  form.reset();
});
