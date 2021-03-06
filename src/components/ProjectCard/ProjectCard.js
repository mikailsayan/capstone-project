import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledImage from '../styled-components/StyledImage';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';
import StyledCardButton from '../styled-components/StyledCardButton';
import MySVG from '../MySVG';
import { useRouter } from 'next/router';
import EditProject from '../EditProject/EditProject';

export default function ProjectCard({ project, projectIndex }) {
	const selectProject = useStore(state => state.selectProject);
	const selectFeature = useStore(state => state.selectFeature);
	const setAppState = useStore(state => state.setAppState);
	const setModalState = useStore(state => state.setModalState);
	const setIndexState = useStore(state => state.setIndexState);
	const toggleAdd = useStore(state => state.toggleAdd);

	const toggleEditProject = useStore(state => state.toggleEditProject);

	const router = useRouter();

	return project.edit ? (
		<EditProject project={project} projectIndex={projectIndex} />
	) : (
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
				<div
					onClick={() => {
						setModalState();
						setIndexState(projectIndex);
					}}
				>
					<MySVG
						variant="cancel"
						position="absolute"
						size="2.6rem"
						top="2.1rem"
						right="2rem"
					/>
				</div>
				<div
					onClick={() => {
						toggleEditProject(projectIndex);
					}}
				>
					<MySVG
						variant="edit"
						position="absolute"
						size="2.6rem"
						top="2.1rem"
						right="5.3rem"
					/>
				</div>
			</StyledDiv>
			<StyledUL variant="list-in-card">
				{project.feature.slice(0, 3).map(feature => {
					const featureIndex = project.feature.findIndex(
						featureIndex => featureIndex.id === feature.id
					);
					return (
						<StyledList
							key={feature.id}
							variant="featurelist-small"
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
								selectFeature(projectIndex, featureIndex);
								setAppState('featurelist');
								router.push('/featurelist');
							}}
						>
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
					onClick={() => {
						selectProject(projectIndex);
						toggleAdd();
						setAppState('featurelist');
						router.push('/featurelist');
					}}
				>
					Feature hinzuf??gen
				</StyledCardButton>
			</StyledArticle>
		</StyledSectionCard>
	);
}
