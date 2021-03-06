import {books, projects} from './content-data.js';

export default function initContent() {
  initContentMenu();
  buildContentBody();
  document.getElementById('content-panel').addEventListener('mouseleave',
    function () { hideContents(); }
  );
}

function initContentMenu() {
  [/*'projects',*/ 'readings'/*, 'articles'*/].forEach((content) => {
      document.getElementById(content + '-menu').addEventListener('mouseover',
          function () { show(content); }
      );
  });
}

function hideContents() {
  ['projects', 'readings', 'articles'].forEach((content) => {
    document.getElementById(content + '-menu').classList.remove('boldify');
    document.getElementById(content + '-body').hidden = true;
  });
}

function show(content) {
  hideContents();
  document.getElementById(content + '-menu').classList.add('boldify');
  document.getElementById(content + '-body').hidden = false;
}

function buildContentBody() {
  buildProjectBody();
  buildReadingsBody();
  buildArticlesBody();
}

function buildProjectBody() {
  let projectsBody = document.getElementById('projects-body');

  for (let project in projects) {
    project = projects[project];

    let picturesBody = '';
    for (let pic in project.pictures) {
      picturesBody += '<a href="img/' + project.pictures[pic] + '" target="blank">'
      picturesBody += '<img class="content-pic" src="img/' + project.pictures[pic] + '" width="200">';
      picturesBody += '</a>'
    }

    let subjectBody = '';
    for (let subject in project.subjects) {
      subjectBody += '<span class="subject">' + project.subjects[subject] + '</span>';
    }

    projectsBody.innerHTML += `
    <div class="content-panel">
      <div class="row">
        <div class="ten columns">
          <h4 style="font-family: sans-serif;" class="project-title">` + project.title + `</h4>
        </div>
        <div class="rightify two columns">
          <a class="project-git-link fab fa-github-square" target="blank" href="` + project.github + `"></a>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">` + subjectBody + `</div>
      </div>
      <div class="row">
        <div class="eight columns">
          <p>` + project.presentation + `</p>
        </div>
        <div class="four columns">`
          + picturesBody +
        `</div>
      </div>
    </div>`;
  }
}

function buildReadingsBody() {
  let readingBody = document.getElementById('readings-body');
  for (let book in books) {
    book = books[book];
    readingBody.innerHTML += `
    <div class="content-panel row">
      <div class="eight columns">
        <h4 style="font-family: sans-serif;" class="book-title">` + book.title + `</h4>
        <h5 class="book-author">` + book.author + `</h5>
      </div>
      <div class="four columns">
        <img class="content-pic" src="` + book.picture + `" width="200">
      </div>
    </div>`
  }
}

function buildArticlesBody() {
  //contentBody.innerHTML += '<div id="articles-body" hidden><p>Hello Articles !</p><br></div>';
}
