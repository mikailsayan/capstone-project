import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		projectszustand: [
			{
				id: nanoid(),
				name: 'Projektname 1',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/01/2001',
				end: '02/01/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'blue',
				edit: false,
			},
		],
		featureszustand: [
			{
				id: nanoid(),
				name: 'Featurename 1',
				begin: '01/01/2001',
				end: '02/01/2001',
				edit: false,
			},
		],
		todoszustand: [
			{
				id: nanoid(),
				name: 'Todoname 1',
				note: 'Here are some notes for Todo 1',
				complexity: 'easy',
				begin: '01/03/2022',
				end: '03/03/2022',
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todoname 2',
				note: 'Here are some notes for Todo 2',
				complexity: 'middle',
				begin: '01/03/2022',
				end: '03/03/2022',
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todoname 3',
				note: 'Here are some notes for Todo 3',
				complexity: 'hard',
				begin: '01/03/2022',
				end: '03/03/2022',
				edit: false,
				isOpen: false,
			},
		],
		openNote: index => {
			set(
				produce(draft => {
					draft.todoszustand[index].isOpen = !draft.todoszustand[index].isOpen;
				})
			);
		},
	}))
);

export default useStore;

/*return {
	//Add Project Step 1-2
	isActive: true,
	step: 1,
	maxStep: 2,
	formAnswers: {},
	nextStep: () => {
		set(state => {
			if (state.step < state.maxStep) {
				return { step: state.step + 1 };
			}
		});
	},
	endFormFunction: () => {
		set({ isActive: false });
	},
};*/
