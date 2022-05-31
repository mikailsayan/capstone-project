import StyledForm from '../styled-components/StyledForm';
import StyledSection from '../styled-components/StyledSection';
import StyledButton from '../styled-components/StyledButton';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledTextarea from '../styled-components/StyledTextarea';
import StyledArticle from '../styled-components/StyledArticle';
import StyledDiv from '../styled-components/StyledDiv';
import MySVG from '../MySVG';
import { useState } from 'react';
import useStore from '../../hooks/useStore';

export default function AddTodoProject({ projectIndex, featureIndex }) {
	const [todonameValue, setTodonameValue] = useState('');
	const [todonoteValue, setTodonoteValue] = useState('');
	const [radio, setRadio] = useState('');
	const addTodo = useStore(state => state.addTodo);
	const toggleAddTodo = useStore(state => state.toggleAddTodo);

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				addTodo(todonameValue, todonoteValue, radio);
				setTodonameValue('');
				setTodonoteValue('');
				setRadio('');
			}}
		>
			<StyledSection variant="big-grey">
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
						<StyledDiv variant="green-complex" />
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
						<StyledDiv variant="yellow-complex" />
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
						<StyledDiv variant="red-complex" />
					</StyledLabel>
				</StyledArticle>
			</StyledSection>
		</StyledForm>
	);
}
