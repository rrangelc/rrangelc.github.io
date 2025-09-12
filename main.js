import * as THREE from 'three';
import { translations } from './translations.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Renderer setup
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Camera position
camera.position.z = 40;

// Create dollar sign texture
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 64;
canvas.height = 64;
context.fillStyle = '#ffffff';
context.font = 'bold 48px Arial';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText('$', 32, 32);

const texture = new THREE.CanvasTexture(canvas);

// Green color palette
const colors = [
    '#2ecc71', // Emerald
    '#27ae60', // Nephritis
    '#1abc9c', // Turquoise
    '#16a085', // Green Sea
    '#00b894', // Mint Leaf
    '#00cec9'  // Robin's Egg Blue
];

// Particle system
const particlesCount = 1500;
const positions = new Float32Array(particlesCount * 3);
const colorsArray = new Float32Array(particlesCount * 3);
const alphasArray = new Float32Array(particlesCount);

// Create spiral pattern
for (let i = 0; i < particlesCount; i++) {
    const radius = 40;
    const spinAngle = (i / particlesCount) * Math.PI * 10;
    const branchAngle = (i % 3) * (Math.PI * 2) / 3;
    
    // Add some randomness to the radius
    const randomRadius = radius * (0.8 + Math.random() * 0.4);
    
    // Calculate position with spiral pattern
    const x = Math.cos(spinAngle + branchAngle) * randomRadius;
    const y = (Math.random() - 0.5) * 30;
    const z = Math.sin(spinAngle + branchAngle) * randomRadius;
    
    // Add some random offset for more natural distribution
    positions[i * 3] = x + (Math.random() - 0.5) * 5;
    positions[i * 3 + 1] = y + (Math.random() - 0.5) * 5;
    positions[i * 3 + 2] = z + (Math.random() - 0.5) * 5;
    
    // Assign colors
    const color = new THREE.Color(colors[i % colors.length]);
    colorsArray[i * 3] = color.r;
    colorsArray[i * 3 + 1] = color.g;
    colorsArray[i * 3 + 2] = color.b;

    // Asignar opacidad aleatoria (más cerca, más brillante)
    const distance = Math.sqrt(x * x + y * y + z * z);
    let alpha = 0.5 + 0.5 * Math.random(); // base aleatoria
    alpha *= 1 - Math.min(distance / 60, 0.7); // más lejos, más tenue
    alphasArray[i] = Math.max(0.25, Math.min(1, alpha));
}

// Create geometry and material
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
geometry.setAttribute('alpha', new THREE.BufferAttribute(alphasArray, 1));

const material = new THREE.PointsMaterial({
    size: 2,
    transparent: true,
    opacity: 1.0,
    vertexColors: true,
    map: texture,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

// Modificar el shader para usar alpha individual
material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `#include <common>\nattribute float alpha;\nvarying float vAlpha;`
    ).replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\nvAlpha = alpha;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
        'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
        'gl_FragColor = vec4( outgoingLight, diffuseColor.a * vAlpha );'
    );
};

// Create particle system
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Mouse interaction
const mouse = new THREE.Vector2();
const targetRotation = new THREE.Vector2();
let currentRotation = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    targetRotation.x = mouse.y * 0.5;
    targetRotation.y = mouse.x * 0.5;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Smooth rotation
    currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
    currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
    
    particles.rotation.x = currentRotation.x;
    particles.rotation.y = currentRotation.y;
    
    // Add floating motion
    const time = Date.now() * 0.001;
    particles.rotation.y += 0.001;
    
    // Update particle positions
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.01;
    }
    geometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function updateLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                value = null;
                break;
            }
        }
        
        if (value) {
            element.textContent = value;
        }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                value = null;
                break;
            }
        }
        
        if (value) {
            element.placeholder = value;
        }
    });

    // Update active language button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update rotating text
    updateRotatingWords(lang);
}

// Language switcher
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Simple navigation function
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
        targetSection.classList.add('active');
        console.log('Section activated:', sectionId);
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
    
    document.querySelectorAll('.indicator-dot').forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === sectionId) {
            dot.classList.add('active');
        }
    });
}

// Navigation handling
function updateNavigation(sectionId) {
    showSection(sectionId);
}

// Handle navigation clicks
document.querySelectorAll('.nav-link, .indicator-dot').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = element.getAttribute('data-section');
        console.log('Navigation clicked:', sectionId);
        showSection(sectionId);
        window.location.hash = sectionId;
    });
});

// Handle hash-based navigation
function handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
}

// Texto rotativo
let rotatingWords = translations.en.home.rotatingWords;
let currentWordIndex = 0;
const rotatingTextElement = document.getElementById('rotatingText');

function rotateText() {
    if (rotatingTextElement) {
        // Fade out
        rotatingTextElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Change text
            currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
            rotatingTextElement.textContent = rotatingWords[currentWordIndex];
            
            // Fade in
            rotatingTextElement.classList.remove('fade-out');
            rotatingTextElement.classList.add('fade-in');
            
            setTimeout(() => {
                rotatingTextElement.classList.remove('fade-in');
            }, 500);
        }, 500);
    }
}

// Start text rotation
setInterval(rotateText, 3000); // Cambia cada 3 segundos

// Update rotating words when language changes
function updateRotatingWords(lang) {
    rotatingWords = translations[lang].home.rotatingWords;
    currentWordIndex = 0;
    if (rotatingTextElement) {
        rotatingTextElement.textContent = rotatingWords[0];
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateLanguage('en');
    
    // Handle initial hash
    handleHashChange();
    
    // Start animation
    animate();
});

// Event listeners
window.addEventListener('hashchange', handleHashChange); 