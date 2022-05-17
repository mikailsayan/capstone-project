import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureCardSmall from './FeatureCardSmall';

describe('feature card', () => {
	it('renders the feature card', () => {
		render(<FeatureCardSmall />);

		//Wir testen, ob drei Listenelemente gerendert werden
		const listitems = screen.getAllByRole('listitem');
		const headline = screen.getByRole('heading');

		expect(listitems.length).toBe(3);
		expect(headline).toBeInTheDocument();
	});
});
