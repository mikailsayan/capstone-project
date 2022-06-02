import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureCard from './FeatureCard';

describe('feature card', () => {
	it('renders the feature card', () => {
		render(<FeatureCard />);

		//Wir testen, ob drei Listenelemente gerendert werden
		const listitems = screen.getAllByRole('listitem');
		const headline = screen.getByRole('heading');

		expect(listitems.length).toBe(3);
		expect(headline).toBeInTheDocument();
	});
});
