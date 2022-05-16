import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCardHome from './ProjectCardHome';

describe('Footer', () => {
	it('renders the project card', () => {
		render(<ProjectCardHome />);

		//Wir testen, ob drei Listenelemente gerendert werden
		const listitems = screen.getAllByRole('listitem');
		const headline = screen.getByRole('heading');

		expect(listitems.length).toBe(3);
		expect(headline).toBeInTheDocument();
	});
});
