import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import { format } from 'date-fns';
import MySVG from '../MySVG';
import { useState, React } from 'react';
import useStore from '../../hooks/useStore';

export default function AddFeature({ project, projectIndex, addfeatureform }) {
	const [featurenameInputValue, setFeaturenameInputValue] = useState('');
	const [beginInputValue, setBeginInputValue] = useState('');
	const [endInputValue, setEndInputValue] = useState('');
	const addFeature = useStore(state => state.addFeature);
	const toggleAdd = useStore(state => state.toggleAdd);

	const today = new Date();
	const date = format(
		new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		'yyyy-MM-dd'
	);

	return (
		<StyledForm
			id={addfeatureform}
			onSubmit={event => {
				event.preventDefault();
				addFeature(projectIndex, featurenameInputValue, beginInputValue, endInputValue);
				setFeaturenameInputValue('');
				setBeginInputValue('');
				setEndInputValue('');
				toggleAdd();
			}}
		>
			<StyledSectionCard
				variant="middle-grey"
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
				<div
					onClick={() => {
						toggleAdd();
					}}
				>
					<MySVG
						variant="cancel"
						position="absolute"
						size="2.6rem"
						top="1.8rem"
						right="2.5rem"
					/>
				</div>

				<StyledLabel variant="default" htmlFor="featurename">
					Featurename
				</StyledLabel>
				<StyledInput
					required
					variant="full"
					id="featurename"
					name="featurename"
					type="text"
					value={featurenameInputValue}
					onChange={event => {
						setFeaturenameInputValue(event.target.value);
					}}
				/>
				<StyledLabel variant="default" htmlFor="date">
					Zeitraum
				</StyledLabel>
				<StyledDiv variant="date">
					<StyledInput
						variant="date"
						id="begindate"
						name="date"
						type="date"
						min={date}
						value={beginInputValue}
						onChange={event => {
							setBeginInputValue(event.target.value);
						}}
					/>
					<p>-</p>
					<StyledInput
						variant="date"
						id="enddate"
						name="date"
						type="date"
						min={date}
						value={endInputValue}
						onChange={event => {
							setEndInputValue(event.target.value);
						}}
					/>
				</StyledDiv>
			</StyledSectionCard>
		</StyledForm>
	);
}
