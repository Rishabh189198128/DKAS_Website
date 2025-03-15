function toggleNews(id) {
    // Hide all news details
    let allNews = document.querySelectorAll(".news-details");
    allNews.forEach(news => {
        if (news.id !== `news-${id}`) {
            news.style.display = "none";
        }
    });

    // Toggle the clicked news item
    let selectedNews = document.getElementById(`news-${id}`);
    if (selectedNews.style.display === "block") {
        selectedNews.style.display = "none";
    } else {
        selectedNews.style.display = "block";
    }
}


function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

