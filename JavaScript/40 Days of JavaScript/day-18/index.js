/**
 * creating elements
 * inserting elements
 * modifying elements
 * removing elements
 * read, write and remove attributes
 * traversing/navigating the DOM
 * minipulating CSS styles
 * controlling visibilities
 * build projects
 *  */

{
  // creating elements
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new paragraph.';
  document.body.appendChild(newElement);
}

{
  // insert elements
  const spanElement = document.createElement('span');
  spanElement.innerText = 'This is a span element.';

  const referenceNode = document.querySelector('p');
  document.body.insertBefore(spanElement, referenceNode);
}

{
  // modifying elements
  const element = document.querySelector('p');
  element.textContent = 'Modified text content';
  element.innerHTML = '<strong>Modified text content</strong>';

  const h2Element = document.querySelector('div');

  // console.log('Inner text: ', h2Element.innerText);
  // console.log('Inner HTML: ', h2Element.innerHTML);
}

{
  // removing/replacing elements
  const element = document.getElementById('list');
  const removeElement = element.children[0];
  element.removeChild(removeElement);
  // console.log(removeElement);

  const replaceElement = document.createElement('li');
  replaceElement.textContent = 'New list item';
  element.replaceChild(replaceElement, element.children[0]);
}

{
  // read, write and remove attributes
  const imageElement = document.querySelector('img');
  // console.log(imageElement.getAttribute('src'));
  imageElement.setAttribute('src', './profile.png');
  imageElement.setAttribute('alt', 'profile image');

  imageElement.removeAttribute('height');

  imageElement.hasAttribute('src');
  // console.log(imageElement.hasAttribute('src'));
  imageElement.hasAttribute('height');
  // console.log(imageElement.hasAttribute('height'));
}

{
  // traversing/navigating the DOM
  const spanElement = document.getElementById('span-text');
  //  console.log('Parent element', spanElement.parentElement.parentElement);
  //  console.log('Parent node', spanElement.parentNode.parentNode);

  const divElement = document.getElementById('parent-div');
  console.log('Child element', divElement.children);
  console.log('Child node', divElement.childNodes);

  //  console.log('Next sibling', spanElement.nextElementSibling);
  //  console.log('Previous sibling', spanElement.previousElementSibling);
  //  console.log('Next sibling', spanElement.nextSibling);
  //  console.log('Previous sibling', spanElement.previousSibling);
}
