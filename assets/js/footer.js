// Footer component for Rucio website
function createFooter() {
    const footerHTML = `
    <footer id="footer">
      <ul class="icons">
        <li><a href="https://github.com/rucio" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="https://fosstodon.org/@rucio" class="icon brands fa-mastodon"><span class="label">Mastodon</span></a></li>
        <li><a href="contact.html" class="icon solid fa-comments"><span class="label">Contact Us</span></a></li>
        <li><a href="mailto:rucio-contact@cern.ch" class="icon solid fa-envelope"><span class="label">Email</span></a>
        </li>
      </ul>
      <div class="cern-footer">
        <a href="https://home.cern" class="cern-logo-link" title="CERN - Accelerating Science">
          <img src="images/LogoOutline-White.svg" alt="CERN" class="cern-logo" />
        </a>
      </div>
      <ul class="copyright">
        <li>Website template by: <a href="http://html5up.net">HTML5 UP</a></li>
        <li>Background image by: <a href="https://cds.cern.ch/record/1489958">CERN</a></li>
      </ul>
    </footer>`;
    
    return footerHTML;
}

// Function to inject footer into the page
function injectFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
}

// Auto-inject footer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    injectFooter();
});
