import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledImage from '../styled-components/StyledImage';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';

export default function ProjectCard({ project }) {
	const appState = useStore(state => state.appState);

	return (
		appState === 'projects' && (
			<StyledSection
				variant="small-grey"
				style={{
					background:
						project.color === 'blue'
							? 'var(--blue-project)'
							: project.color === 'purple'
							? 'var(--purple-project)'
							: project.color === 'yellow'
							? 'var(--yellow-project)'
							: project.color === 'red'
							? 'var(--red-project)'
							: project.color === 'green'
							? 'var(--green-project)'
							: project.color === ''
							? 'var(--card-grey)'
							: '',
				}}
			>
				<StyledDiv variant="cardtitle">
					<StyledImage
						src="/singleprojecticon.svg"
						alt="singleprojecticon-svg"
						width={30}
						height={30}
					/>
					<Typography variant="h3" component="h3" size="1.9rem">
						{project.name}
					</Typography>
				</StyledDiv>
				<StyledUL variant="list-in-card">
					{project.feature.slice(0, 3).map(feature => {
						return (
							<StyledList key={feature.id} variant="featurelist-small">
								<StyledImage
									variant="bulletpoint"
									src="/bulletpoint.svg"
									alt="Bullet Point"
									width={20}
									height={20}
								/>
								{feature.name}
							</StyledList>
						);
					})}
				</StyledUL>
			</StyledSection>
		)
	);
}
