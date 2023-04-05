const targetPath = 'M2.412.974h19.176v22.052H2.412z';
const targetClass = 'css-901oao r-1awozwy r-18jsvk2 r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0';

function hideDivsWithClass() {
  const divElements = document.querySelectorAll(`div.${targetClass}`);
  divElements.forEach((divElement) => {
    divElement.style.display = 'none';
  });
}

function removePathFromElements() {
  const pathElements = document.querySelectorAll('path');
  pathElements.forEach((pathElement) => {
    if (pathElement.getAttribute('d') === targetPath) {
      pathElement.parentNode.removeChild(pathElement);
    }
  });
}

function observeDOMChanges() {
  const targetNode = document.body;
  const observerConfig = { childList: true, subtree: true };

  const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        hideDivsWithClass();
        removePathFromElements();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, observerConfig);
}

hideDivsWithClass();
removePathFromElements();
observeDOMChanges();
