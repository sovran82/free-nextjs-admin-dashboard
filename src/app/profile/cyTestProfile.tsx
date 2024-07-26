import React, { useState } from 'react';

/*
cy.get('button').contains('Click me').click();
cy.get('.result').should('have.text', 'Clicked!');
*/

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <h1>My Profile</h1>
      <button onClick={() => setClicked(true)}>Click me</button>
      <div className="result">{ clicked ? "Clicked!" : "Not Clicked" }</div>
    </div>
  );
};

export default Profile;
