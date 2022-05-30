import StyledSection from '../styled-components/StyledSection';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledButton from '../styled-components/StyledButton';
import MySVG from '../MySVG';
import { useState, React } from 'react';
import useStore from '../../hooks/useStore';

export default function AddFeatureProject({ projectIndex }) {
	const [featurenameInputValue, setFeaturenameInputValue] = useState('');
	const [beginInputValue, setBeginInputValue] = useState('');
	const [endInputValue, setEndInputValue] = useState('');
	const addFeature = useStore(state => state.addFeature);
	const toggleAdd = useStore(state => state.toggleAdd);

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				addFeature(projectIndex, featurenameInputValue, beginInputValue, endInputValue);
				setFeaturenameInputValue('');
				setBeginInputValue('');
				setEndInputValue('');
				toggleAdd();
			}}
		>
			<StyledSection variant="middle-grey">
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
				<StyledButton type="submit" variant="svgbutton">
					<MySVG
						variant="save2"
						position="absolute"
						color="#6ADD98"
						size="2.6rem"
						top="1.8rem"
						right="6rem"
					/>
				</StyledButton>

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
				<StyledLabel variant="default" htmlFor="begindate">
					Startdatum:
				</StyledLabel>
				<StyledDiv variant="center">
					<StyledInput
						variant="date"
						id="begindate"
						name="begindate"
						type="date"
						value={beginInputValue}
						onChange={event => {
							setBeginInputValue(event.target.value);
						}}
					/>
					<MySVG variant="calender" size="2.9rem" />
				</StyledDiv>
				<StyledLabel variant="default" htmlFor="enddate">
					Enddatum:
				</StyledLabel>
				<StyledDiv variant="center">
					<StyledInput
						variant="date"
						id="enddate"
						name="enddate"
						type="date"
						value={endInputValue}
						onChange={event => {
							setEndInputValue(event.target.value);
						}}
					/>
					<MySVG variant="calender" size="2.9rem" />
				</StyledDiv>
			</StyledSection>
		</StyledForm>
	);
}
