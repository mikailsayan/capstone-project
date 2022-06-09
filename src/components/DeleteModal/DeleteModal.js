import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';
import StyledButtonModal from '../styled-components/StyledButtonModal';
import StyledDiv from '../styled-components/StyledDiv';

export default function DeleteModal() {
	const setModalState = useStore(state => state.setModalState);
	const indexState = useStore(state => state.indexState);
	const deleteProject = useStore(state => state.deleteProject);

	return (
		<section>
			<StyledArticle variant="deletemodal">
				<StyledDiv variant="deletemodal">
					<h2>Projekt wirklich löschen?</h2>
				</StyledDiv>
				<StyledDiv variant="deletemodalbuttons">
					<StyledButtonModal
						type="button"
						variant="deletemodal"
						onClick={() => {
							deleteProject(indexState);
							setModalState();
						}}
					>
						Löschen
					</StyledButtonModal>
					<StyledButtonModal
						type="button"
						variant="modalbutton"
						onClick={() => {
							setModalState();
						}}
					>
						Abbrechen
					</StyledButtonModal>
				</StyledDiv>
			</StyledArticle>
		</section>
	);
}
