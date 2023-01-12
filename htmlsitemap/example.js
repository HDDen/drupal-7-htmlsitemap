document.addEventListener('DOMContentLoaded', function(){
    /**
     * Sitemap menu spoilers
     */
    var sitemap_spoilers = document.querySelectorAll('.htmlsitemap > ul > li');
    if (sitemap_spoilers.length) {
        for (var i = 0; i < sitemap_spoilers.length; i++) {
            sitemap_spoilers[i].addEventListener('click', function (e) {
                if (e.target === e.currentTarget) {
                    e.currentTarget.classList.toggle('active');
                }
            });
        }
    }
});