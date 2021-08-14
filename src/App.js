import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false); // Set to False to prevent the contact form from showing when a user initially navigates to the homepage

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

/* 
 The shorthand condition is called a ternary operator, identified with the ? and : symbols. 
 The ternary operator is a popular pattern in React to enable conditional rendering, 
 similar to how we used the && operator as a short circuit. With the ternary, though, 
 we supply the false condition to render as well.

 Notice the <> and </> that wrap the Gallery and About components. 
 They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>.
*/