// Header component for Rucio website
function createHeader(className = '') {
    const headerHTML = `
    <header id="header" class="${className}">
      <a href="index.html">
        <span id="logo-container">
          <img src='images/wide_logo2.png' />
        </span>
      </a>

      <nav id="nav-desktop">
        <ul>
          <li><a class="icon solid fa-code" href="https://github.com/rucio/rucio">&nbsp;Source</a></li>
          <li>-</li>
          <li><a class="icon solid fa-file-archive" href="https://rucio.cern.ch/documentation">&nbsp;Documentation</a></li>
          <li>-</li>
          <li><a class="icon solid fa-users" href="team.html">&nbsp;Team</a></li>
          <li>-</li>
          <li><a class="icon solid fa-globe" href="community.html">&nbsp;Community</a></li>
          <li>-</li>
          <li><a class="icon solid fa-comments" href="https://rucio.cern.ch/documentation/contact_us">&nbsp;Communication</a></li>       
          <li>-</li>
          <li><a class="icon solid fa-book" href="publications.html">&nbsp;Publications</a></li>
          <li>-</li>
          <li><a class="icon solid fa-calendar" href="events.html">&nbsp;Events</a></li>
        </ul>
      </nav>
      <nav id="nav">
        <ul>
          <li class="special">
            <a href="#menu" class="menuToggle"></a>
            <div id="menu">
              <ul>
                <li><a class="icon solid fa-code" href="https://github.com/rucio/rucio">&nbsp;Source</a></li>
                <li><a class="icon solid fa-file-archive"
                    href="https://rucio.cern.ch/documentation">&nbsp;Documentation</a></li>
                <li><a class="icon solid fa-users" href="team.html">&nbsp;Team</a></li>
                <li><a class="icon solid fa-globe" href="community.html">&nbsp;Community</a></li>
                <li><a class="icon solid fa-comments" href="https://rucio.cern.ch/documentation/contact_us">&nbsp;Communication</a></li>
                <li><a class="icon solid fa-book" href="publications.html">&nbsp;Publications</a></li>
                <li><a class="icon solid fa-calendar" href="events.html">&nbsp;Events</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>`;


    return headerHTML;
}


// Function to inject header into the page
function injectHeader(className = '') {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader(className);
    }
}


// Function to set header class based on page type
function setHeaderClass(className = '') {
    const header = document.getElementById('header');
    if (header && className) {
        header.className = className;
    }
}


// Auto-inject header when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is the index page (home page) and set alt class
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
    const headerClass = isHomePage ? 'alt' : '';
    injectHeader(headerClass);
});
