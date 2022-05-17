import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCardHome from './ProjectCardHome';

describe('project card', () => {
	it('renders the project card', () => {
		render(
			<ProjectCardHome
				project={{
					name: 'Projekt 1',
				}}
			/>
		);

		const listitems = screen.getAllByRole('listitem');
		const headline = screen.getByRole('heading');

		expect(listitems.length).toBe(3);
		expect(headline).toBeInTheDocument();
	});
});
