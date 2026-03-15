import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class Blog implements AfterViewInit {

  index: number = 1;
  interval: any;
  delay: number = 3000;

  ngAfterViewInit(): void {

    const slider = document.getElementById("blogSlider") as HTMLElement;
    const track = document.getElementById("sliderTrack") as HTMLElement;
    const pagination = document.getElementById("pagination") as HTMLElement;

    let slides: HTMLElement[] = Array.from(track.children) as HTMLElement[];
    const realSlideCount = slides.length;

    /* CLONE FIRST AND LAST */
    const firstClone = slides[0].cloneNode(true) as HTMLElement;
    const lastClone = slides[slides.length - 1].cloneNode(true) as HTMLElement;

    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    slides = Array.from(track.children) as HTMLElement[];

    track.style.transform = "translateX(-100%)";

    /* PAGINATION */
    pagination.innerHTML = "";

    for (let i = 0; i < realSlideCount; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";

      if (i === 0) {
        dot.classList.add("active");
      }

      pagination.appendChild(dot);
    }

    const dots: HTMLElement[] = Array.from(pagination.children) as HTMLElement[];

    const updateDots = () => {
      dots.forEach(dot => dot.classList.remove("active"));

      const activeIndex = (this.index - 1 + realSlideCount) % realSlideCount;
      dots[activeIndex].classList.add("active");
    };

    const moveSlide = () => {
      track.style.transition = "transform 0.6s ease-in-out";
      track.style.transform = `translateX(-${this.index * 100}%)`;
      updateDots();
    };

    const startAuto = () => {
      stopAuto();
      this.interval = setInterval(() => {
        this.index++;
        moveSlide();
      }, this.delay);
    };

    const stopAuto = () => {
      clearInterval(this.interval);
    };

    track.addEventListener("transitionend", () => {

      if (slides[this.index].classList.contains("clone")) {

        track.style.transition = "none";

        if (this.index === slides.length - 1) {
          this.index = 1;
        }

        if (this.index === 0) {
          this.index = realSlideCount;
        }

        track.style.transform = `translateX(-${this.index * 100}%)`;
      }

    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        stopAuto();
        this.index = i + 1;
        moveSlide();
        startAuto();
      });
    });

    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);

    updateDots();
    startAuto();
  }
}