// Theme Logic
document.addEventListener('alpine:init', () => {
    Alpine.data('themeData', () => ({
        isDark: false,
        mobileMenuOpen: false,
        init() {
            // Check localStorage or System preference
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.isDark = true;
            } else {
                this.isDark = false;
            }
            
            // Watch for changes and update DOM/Storage
            this.$watch('isDark', value => {
                localStorage.setItem('theme', value ? 'dark' : 'light');
                if (value) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            });

            // Initial class set
            if (this.isDark) document.documentElement.classList.add('dark');
        },
        toggleTheme() {
            this.isDark = !this.isDark;
        }
    }));
});

// TOC Generation Logic
document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.prose'); // Target the article content wrapper
    if (article) {
        const headers = article.querySelectorAll('h2, h3');
        const tocContainer = document.getElementById('toc-container');
        const tocList = document.getElementById('toc-list');
        
        if (headers.length > 0 && tocContainer && tocList) {
            tocContainer.classList.remove('hidden'); // Show TOC widget
            
            headers.forEach((header, index) => {
                const id = 'toc-header-' + index;
                header.id = id; // Add ID to header
                
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#' + id;
                a.textContent = header.textContent;
                
                // Styling based on header level
                if (header.tagName === 'H2') {
                    a.className = 'block hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium truncate';
                } else {
                    a.className = 'block pl-3 text-xs text-gray-500 dark:text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors truncate border-l border-gray-200 dark:border-gray-700';
                }
                
                // Smooth scroll
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
                
                li.appendChild(a);
                tocList.appendChild(li);
            });

            // Optional: ScrollSpy to highlight active TOC item
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const link = tocList.querySelector(`a[href="#${id}"]`);
                        
                        // Reset all
                        tocList.querySelectorAll('a').forEach(l => l.classList.remove('text-brand-600', 'font-bold'));
                        
                        // Activate current
                        if (link) link.classList.add('text-brand-600', 'font-bold');
                    }
                });
            }, { rootMargin: '-100px 0px -60% 0px' });

            headers.forEach(header => observer.observe(header));
        }
    }
});
