import React from 'react';
import { render, screen } from '@testing-library/react';
import {SideBar} from './SideBar';

it('renders sidebar', () => {
    const items =[{
        name:"nav",
        href:"/test",
        id:1
    }]
  render(<SideBar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[0]).toHaveTextContent(items[0].name);
});
