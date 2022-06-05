import StyledForm from '../styled-components/StyledForm';
import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledButton from '../styled-components/StyledButton';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledTextarea from '../styled-components/StyledTextarea';
import StyledArticle from '../styled-components/StyledArticle';
import MySVG from '../MySVG';
import { useState } from 'react';
import useStore from '../../hooks/useStore';
import StyledDivRadio from '../styled-components/StyledDivRadio';

export default function AddTodo({ project, projectIndex, featureIndex }) {
	const [todonameValue, setTodonameValue] = useState('');
	const [todonoteValue, setTodonoteValue] = useState('');
	const [radio, setRadio] = useState('');
	const addTodo = useStore(state => state.addTodo);
	const toggleAddTodo = useStore(state => state.toggleAddTodo);

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				addTodo(projectIndex, featureIndex, todonameValue, todonoteValue, radio);
				setTodonameValue('');
				setTodonoteValue('');
				setRadio('');
				toggleAddTodo(projectIndex, featureIndex);
			}}
		>
			<StyledSectionCard
				variant="big-grey"
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
				<StyledButton type="submit" variant="svgbutton">
					<MySVG
						variant="save2"
						position="absolute"
						color="var(--save-icon)"
						size="2.6rem"
						top="1.8rem"
						right="6rem"
					/>
				</StyledButton>
				<div
					onClick={() => {
						toggleAddTodo(projectIndex, featureIndex);
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
				<StyledLabel variant="default" htmlFor="todoname">
					Todoname
				</StyledLabel>
				<StyledInput
					required
					variant="full"
					id="todoname"
					name="todoname"
					type="text"
					value={todonameValue}
					onChange={event => {
						setTodonameValue(event.target.value);
					}}
				/>
				<StyledArticle variant="flexcenter">
					<StyledTextarea
						variant="addtodonote"
						value={todonoteValue}
						onChange={event => {
							setTodonoteValue(event.target.value);
						}}
					/>
				</StyledArticle>
				<StyledLabel variant="toplabel" htmlFor="complexity">
					Schwierigkeit
				</StyledLabel>
				<StyledArticle variant="flexcenter">
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="easy"
						value="easy"
						checked={radio === 'easy'}
						onChange={event => {
							setRadio(event.target.value);
						}}
					/>
					<StyledLabel variant="complexity" htmlFor="easy">
						<StyledDivRadio variant="green-complex-radio" />
					</StyledLabel>
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="middle"
						value="middle"
						checked={radio === 'middle'}
						onChange={event => {
							setRadio(event.target.value);
						}}
					/>
					<StyledLabel variant="complexity" htmlFor="middle">
						<StyledDivRadio variant="yellow-complex-radio" />
					</StyledLabel>
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="hard"
						value="hard"
						checked={radio === 'hard'}
						onChange={event => {
							setRadio(event.target.value);
						}}
					/>
					<StyledLabel variant="complexity" htmlFor="hard">
						<StyledDivRadio variant="red-complex-radio" />
					</StyledLabel>
				</StyledArticle>
			</StyledSectionCard>
		</StyledForm>
	);
}
