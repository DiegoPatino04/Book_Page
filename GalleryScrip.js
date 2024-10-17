const chapters = [
    {
        title: "Chapter 1: Introduction",
        images: [
            "images/chapter1/image1.jpg",
            "images/chapter1/image2.jpg",
            "images/chapter1/image3.jpg"
        ]
    },
    {
        title: "Chapter 2: The Journey Begins",
        images: [
            "images/chapter2/image1.jpg",
            "images/chapter2/image2.jpg"
        ]
    },
    {
        title: "Chapter 3: The Climax",
        images: [
            "images/chapter3/image1.jpg",
            "images/chapter3/image2.jpg",
            "images/chapter3/image3.jpg"
        ]
    }
];

function displayChapters() {
    const chaptersContainer = document.getElementById('chapters');
    chapters.forEach(chapter => {
        const chapterDiv = document.createElement('div');
        chapterDiv.classList.add('chapter');

        const chapterTitle = document.createElement('h2');
        chapterTitle.textContent = chapter.title;
        chapterDiv.appendChild(chapterTitle);

        const imagesDiv = document.createElement('div');
        imagesDiv.classList.add('images');

        chapter.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = chapter.title;
            imagesDiv.appendChild(img);
        });

        chapterDiv.appendChild(imagesDiv);
        chaptersContainer.appendChild(chapterDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayChapters);