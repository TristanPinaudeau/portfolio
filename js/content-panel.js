export default function initContent() {
    initContentMenu();
    buildContentBody();
    document.getElementById('content-panel').addEventListener('mouseleave', function () {
        hideContents();
    });
}

function initContentMenu() {
    document.getElementById('projects-menu').addEventListener('mouseover', function () {
        showProjects();
    });
    document.getElementById('readings-menu').addEventListener('mouseover', function () {
        showReadings();
    });
    document.getElementById('articles-menu').addEventListener('mouseover', function () {
        showArticles();
    });
}

function hideContents() {
    document.getElementById('projects-menu').classList.remove('boldify');
    document.getElementById('readings-menu').classList.remove('boldify');
    document.getElementById('articles-menu').classList.remove('boldify');

    document.getElementById('projects-body').hidden = true;
    document.getElementById('readings-body').hidden = true;
    document.getElementById('articles-body').hidden = true;
}

function showProjects() {
    hideContents();
    document.getElementById("projects-menu").classList.add('boldify');
    document.getElementById('projects-body').hidden = false;
}

function showReadings() {
    hideContents();
    document.getElementById('readings-menu').classList.add('boldify');
    document.getElementById('readings-body').hidden = false;
}

function showArticles() {
    hideContents();
    document.getElementById("articles-menu").classList.add('boldify');
    document.getElementById('articles-body').hidden = false;
}

function buildContentBody() {
    let contentBody = document.getElementById('content-body');
    buildProjectBody(contentBody);
    buildReadingsBody(contentBody);
    buildArticlesBody(contentBody);
}

function buildProjectBody(contentBody) {
    contentBody.innerHTML += '<div id="projects-body" hidden><p>Hello Projects !</p><br></div>';
}

function buildReadingsBody(contentBody) {
    contentBody.innerHTML += '<div id="readings-body" hidden><p>Hello Readings !</p><br></div>';
}

function buildArticlesBody(contentBody) {
    contentBody.innerHTML += '<div id="articles-body" hidden><p>Hello Articles !</p><br></div>';
}