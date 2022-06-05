import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledImage from '../styled-components/StyledImage';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';
import StyledCardButton from '../styled-components/StyledCardButton';
import { useRouter } from 'next/router';

export default function ProjectCard({ project, projectIndex }) {
	const appState = useStore(state => state.appState);
	const selectProject = useStore(state => state.selectProject);
	const setAppState = useStore(state => state.setAppState);

	const router = useRouter();

	return (
		appState === 'projects' && (
			<StyledSectionCard
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
				<StyledArticle variant="cardbuttonarea">
					<StyledCardButton
						type="button"
						style={{
							background:
								project.color === 'blue'
									? 'var(--blue-button)'
									: project.color === 'purple'
									? 'var(--purple-button)'
									: project.color === 'yellow'
									? 'var(--yellow-button)'
									: project.color === 'red'
									? 'var(--red-button)'
									: project.color === 'green'
									? 'var(--green-button)'
									: project.color === 'grey'
									? 'var(--grey-button)'
									: '',
						}}
						onClick={() => {
							selectProject(projectIndex);
							setAppState('featurelist');
							router.push('/featurelist');
						}}
					>
						Alle Informationen
					</StyledCardButton>
					<StyledCardButton
						type="button"
						style={{
							background:
								project.color === 'blue'
									? 'var(--blue-button)'
									: project.color === 'purple'
									? 'var(--purple-button)'
									: project.color === 'yellow'
									? 'var(--yellow-button)'
									: project.color === 'red'
									? 'var(--red-button)'
									: project.color === 'green'
									? 'var(--green-button)'
									: project.color === 'grey'
									? 'var(--grey-button)'
									: '',
						}}
					>
						Feature hinzufügen
					</StyledCardButton>
				</StyledArticle>
			</StyledSectionCard>
		)
	);
}
