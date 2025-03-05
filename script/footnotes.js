document.addEventListener('DOMContentLoaded', () => {
  // Get all superscript elements
  const superscripts = document.querySelectorAll('sup');
  
  superscripts.forEach(sup => {
    sup.style.cursor = 'pointer';
    
    sup.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the footnote number from the superscript text
      const footnoteNum = sup.textContent.replace(/[\[\]]/g, '');
      const footnoteId = `footnote-${footnoteNum}`;
      const footnote = document.getElementById(footnoteId);
      
      if (footnote) {
        footnote.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
        
        // Add a brief highlight effect
        footnote.style.transition = 'background-color 0.8s';
        footnote.style.backgroundColor = 'rgba(0,0,0,0.1)';
        footnote.style.padding = '0.1rem';
        footnote.style.paddingLeft = '0.2rem';
        footnote.style.paddingRight = '0.2rem';
        footnote.style.borderRadius = '0.1rem';
        setTimeout(() => {
          footnote.style.backgroundColor = 'transparent';
        }, 1000);
      }
    });
  });
}); 