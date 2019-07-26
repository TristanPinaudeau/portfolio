export default function initContent() {
    initContentMenu();
    // TODO : appel à buildContentBody pour charger le corps depuis un json plutôt qu'avec des répétitions
    document.getElementById('content-panel').addEventListener('mouseleave', function () {
        hideContents();
    });
}

function initContentMenu() {
    [/*'projects', */'readings'/*, 'articles'*/].forEach((content) => {
         document.getElementById(content + '-menu').addEventListener('mouseover', function () {
             show(content);
         });
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
