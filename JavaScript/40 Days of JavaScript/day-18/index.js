/**
 * creating elements
 * inserting elements
 * removing elements
 * modifying elements
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

