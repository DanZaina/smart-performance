// accordion.js
class Accordion {
    constructor(element) {
      this.element = element;
      this.header = element.querySelector('.accordion-header');
      this.content = element.querySelector('.accordion-content');
      this.chevron = this.header.querySelector('svg');
      
      this.isOpen = false;
      this.bindEvents();
    }
  
    bindEvents() {
      this.header.addEventListener('click', () => this.toggleAccordion());
    }
  
    toggleAccordion() {
      this.isOpen = !this.isOpen;
      
      // Update ARIA
      this.header.setAttribute('aria-expanded', this.isOpen);
      
      // Toggle active class
      this.element.classList.toggle('active');
      
      // Rotate chevron
      this.chevron.style.transform = this.isOpen ? 'rotate(180deg)' : '';
      
      // Animate content
      if (this.isOpen) {
        this.content.style.maxHeight = `${this.content.scrollHeight}px`;
        this.content.style.opacity = '1';
      } else {
        this.content.style.maxHeight = '0';
        this.content.style.opacity = '0';
      }
    }
  }
  
  // Initialize all accordions on the page
  document.addEventListener('DOMContentLoaded', () => {
    const accordionElements = document.querySelectorAll('.accordion-item');
    accordionElements.forEach(accordion => new Accordion(accordion));
  });