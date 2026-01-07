// List of meme filenames - update this array with your meme filenames
const memes = [
    'dont-you-dare-make-a-joke-about-continuous-delivery.webp',
    'dont-you-dare-settle-for-just-fine.webp',
    'moving-to-the-cloud.webp',
    'talk-of-running-applications-in-containers-on-kubernetes.webp',
    'the-speed-of-light-has-nothing-on-outages.webp',
    'when-a-devops-engineer-goes-all-the-way.webp',
    'when-a-surprise-aws-bill-smacks-you-in-the-face.webp',
    'when-technical-debt-catches-up.webp',
    'when-they-told-you-all-you-needed-was-a-yaml-file.webp'
];

// Function to show home section
function showHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('meme-section').style.display = 'none';
}

// Function to show meme section
function showMeme() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('meme-section').style.display = 'block';
    getRandomMeme();
}

// Function to get and display a random meme
function getRandomMeme() {
    const memeContainer = document.getElementById('meme-container');
    
    if (memes.length === 0) {
        memeContainer.innerHTML = `
            <div class="placeholder-container">
                <div class="border rounded p-5 bg-light">
                    <i class="fas fa-image fa-4x text-muted mb-3"></i>
                    <h4 class="text-muted">Meme Placeholder</h4>
                    <p class="text-muted">Add your DevOps memes to the <code>assets/memes/</code> folder and update the memes array in <code>assets/js/app.js</code>!</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Get random meme
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    
    // Display meme with fade-in animation
    memeContainer.innerHTML = `
        <img src="assets/memes/${randomMeme}" 
             class="img-fluid rounded shadow fade-in" 
             alt="DevOps Meme"
             onerror="this.parentElement.innerHTML='<div class=\\'border rounded p-5 bg-light\\'><i class=\\'fas fa-exclamation-triangle fa-4x text-warning mb-3\\'></i><h4 class=\\'text-muted\\'>Meme not found</h4><p class=\\'text-muted\\'>Make sure your meme files are in <code>assets/memes/</code> folder!</p></div>'">
        <p class="text-muted mt-3">
            <i class="fas fa-quote-left"></i> 
            Every DevOps engineer can relate to this! 
            <i class="fas fa-quote-right"></i>
        </p>
    `;
}

// Auto-detect memes from folder (optional - requires a simple server)
// This function can be used if you're running a local server
async function autoDetectMemes() {
    try {
        const response = await fetch('assets/memes/');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const links = doc.querySelectorAll('a');
        
        const detectedMemes = [];
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href.endsWith('.webp') || href.endsWith('.jpg') || 
                        href.endsWith('.jpeg') || href.endsWith('.png') || 
                        href.endsWith('.gif'))) {
                detectedMemes.push(href);
            }
        });
        
        if (detectedMemes.length > 0) {
            memes.length = 0;
            memes.push(...detectedMemes);
        }
    } catch (error) {
        console.log('Auto-detection not available. Using manual meme list.');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment the line below if you want to try auto-detection (requires server)
    // autoDetectMemes();
});