// Common scripts loader for Rucio website
function loadCommonScripts() {
    const scripts = [
        'assets/js/cern-toolbar.js',
        'assets/js/jquery.min.js',
        'assets/js/jquery.scrollex.min.js',
        'assets/js/jquery.scrolly.min.js',
        'assets/js/browser.min.js',
        'assets/js/breakpoints.min.js',
        'assets/js/util.js',
        'assets/js/main.js'
    ];

    // Load scripts sequentially to maintain dependencies
    function loadScript(index) {
        if (index >= scripts.length) {
            return;
        }

        const script = document.createElement('script');
        script.src = scripts[index];
        script.onload = function() {
            loadScript(index + 1);
        };
        script.onerror = function() {
            console.error('Failed to load script:', scripts[index]);
            loadScript(index + 1); // Continue loading next script even if one fails
        };
        document.head.appendChild(script);
    }

    loadScript(0);
}

// Function to inject script tags into the page
function injectScripts() {
    const scriptsContainer = document.getElementById('scripts-container');
    if (scriptsContainer) {
        loadCommonScripts();
        
        // Add IE conditional comment script if needed
        const ieScript = document.createElement('script');
        ieScript.innerHTML = '<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->';
        scriptsContainer.appendChild(ieScript);
    } else {
        // If no scripts container found, load scripts directly
        loadCommonScripts();
    }
}

// Auto-inject scripts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    injectScripts();
});
