import React from 'react';
import { mount } from 'cypress/react';

import Profile from '@/app/profile/cyTestProfile';

describe('MyComponent', () => {
  it('renders correctly', () => {
    mount(<Profile />);

    cy.get('button').contains('Click me').click();
    cy.get('.result').should('have.text', 'Clicked!');
  });
});