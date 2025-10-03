/**
 * Lazy Loading is a design pattern that delays the loading of resources (like components, routes, images, or data) until they are actually needed.

👉 Instead of loading everything at once, it only loads what's necessary at the beginning, and loads the rest on demand.



🔑 Key Points:

Improves Performance – Smaller initial bundle size, faster loading.

Saves Bandwidth – Only loads resources when required.

Better User Experience – Reduces waiting time on the first page load.



🛠 Where Lazy Loading is used:

Components/Routes → Using React.lazy() + Suspense.

Images → Using loading="lazy".

Data Fetching → Fetching data when user interacts (infinite scroll, pagination).
 */


import React, { Suspense, lazy } from 'react';

// Lazy load About component
const About = lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h1>Home Page</h1>

      {/* Load About component only when needed */}
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>

      {/* Lazy loaded image */}
      <img src='https://picsum.photos/400/300' alt='Bike' loading='lazy' />
    </div>
  );
}

export default App;
