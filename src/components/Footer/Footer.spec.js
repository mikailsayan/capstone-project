import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
	it('renders the footer menu', () => {
		render(<Footer />);

		//Wir testen, ob drei Listenelemente gerendert werden
		const listitems = screen.getAllByRole('listitem');

		expect(listitems.length).toBe(3);
	});
});
