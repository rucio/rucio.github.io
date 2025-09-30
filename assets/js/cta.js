// CTA component for Rucio website
function createCTA(styleClass = 'style4') {
    const ctaHTML = `
    <section id="cta" class="wrapper ${styleClass}">
      <div class="inner">
        <header>
          <h2>Get in touch</h2>
          <p>We are always happy to chat. You can drop us a mail and we will reply as quickly as possible.</p>
        </header>
        <ul class="actions vertical">
          <li><a href="contact.html" class="button special primary">Contact us</a></li>
        </ul>
      </div>
    </section>`;

    return ctaHTML;
}

function injectCTA(styleClass = 'style4') {
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer) {
        ctaContainer.innerHTML = createCTA(styleClass);
    }
}

// Auto-inject CTA when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer) {
        const styleClass = ctaContainer.getAttribute('data-style') || 'style4';
        injectCTA(styleClass);
    }
});
