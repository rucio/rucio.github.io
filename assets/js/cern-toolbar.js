/**
 * CERN Toolbar Component
 */

(function() {
    'use strict';
    
    // CERN Toolbar HTML template
    const toolbarHTML = `
        <div class="cern-toolbar">
            <div class="cern-toolbar-left">
                <a href="http://home.cern" title="CERN">
                    <span class="cern-toolbar-logo">CERN</span>
                    <span class="cern-toolbar-tagline">Accelerating science</span>
                </a>
            </div>
            <div class="cern-toolbar-right">
                <a href="https://account.cern.ch/account/Externals/LogOn.aspx">Sign in</a>
                <a href="https://cern.ch/directory">Directory</a>
            </div>
        </div>
    `;
    
    function injectCERNToolbar() {
        // Check if toolbar already exists
        if (document.querySelector('.cern-toolbar')) {
            return;
        }
        
        const toolbarElement = document.createElement('div');
        toolbarElement.innerHTML = toolbarHTML;
        
        document.body.insertBefore(toolbarElement.firstElementChild, document.body.firstChild);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectCERNToolbar);
    } else {
        injectCERNToolbar();
    }
    
    injectCERNToolbar();
    
})();
