import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		projectszustand: [
			{
				id: nanoid(),
				name: 'Projekt 1',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/01/2001',
				end: '02/01/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'blue',
				edit: false,
				selected: true,
				feature: [
					{
						id: nanoid(),
						name: 'Feature 1',
						begin: '01/01/2001',
						end: '02/01/2001',
						isChecked: false,
						edit: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 1',
								note: 'Here are some notes for Todo 1',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 2',
								note: 'Here are some notes for Todo 2',
								complexity: 'middle',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 3',
								note: 'Here are some notes for Todo 3',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
					{
						id: nanoid(),
						name: 'Feature 2',
						begin: '01/02/2001',
						end: '02/02/2001',
						isChecked: false,
						edit: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 4',
								note: 'Here are some notes for Todo 4',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 5',
								note: 'Here are some notes for Todo 5',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
				],
			},
			{
				id: nanoid(),
				name: 'Projekt 2',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/02/2001',
				end: '02/02/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'green',
				edit: false,
				selected: false,
				feature: [
					{
						id: nanoid(),
						name: 'Feature 3',
						begin: '01/01/2001',
						end: '02/01/2001',
						isChecked: false,
						edit: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 6',
								note: 'Here are some notes for Todo 1',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 7',
								note: 'Here are some notes for Todo 2',
								complexity: 'middle',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 8',
								note: 'Here are some notes for Todo 3',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
					{
						id: nanoid(),
						name: 'Feature 4',
						begin: '01/02/2001',
						end: '02/02/2001',
						isChecked: false,
						edit: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 9',
								note: 'Here are some notes for Todo 4',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 10',
								note: 'Here are some notes for Todo 5',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
				],
			},
		],
		dropdown: [{ isClicked: false }],
		//appState Functions
		appState: 'featurelist',
		stateToFeatureList: () => {
			set(
				produce(draft => {
					draft.appState = 'featurelist';
				})
			);
		},
		stateToEditFeature: () => {
			set(
				produce(draft => {
					draft.appState = 'editfeature';
				})
			);
		},
		stateToProjects: () => {
			set(
				produce(draft => {
					draft.appState = 'projects';
				})
			);
		},
		stateToAddTodo: () => {
			set(
				produce(draft => {
					draft.appState = 'addtodo';
				})
			);
		},
		stateToAddFeature: () => {
			set(
				produce(draft => {
					draft.appState = 'addfeature';
				})
			);
		},
		stateToFeatureView: () => {
			set(
				produce(draft => {
					draft.appState = 'featureview';
				})
			);
		},
		//End AppState Functions
		//FeatureCardSmall Functions
		selectFeature: (index1, index2) => {
			set(
				produce(draft => {
					draft.projectszustand[index1].feature.forEach(element => {
						element.selected = false;
					});
					console.log(draft.projectszustand);
					draft.projectszustand[index1].feature[index2].selected =
						!draft.projectszustand[index1].feature[index2].selected;
				})
			);
		},
		editFeature: (index1, index2) => {
			set(
				produce(draft => {
					draft.projectszustand[index1].feature[index2].edit =
						!draft.projectszustand[index1].feature[index2].edit;
				})
			);
		},
		closeFeatureView: (index1, index2) => {
			set(
				produce(draft => {
					draft.projectszustand[index1].feature[index2].selected = false;
				})
			);
		},
		//End FeatureCardSmall Functions
		//Dropdown Functions
		isClicked: () => {
			set(
				produce(draft => {
					draft.dropdown[0].isClicked = !draft.dropdown[0].isClicked;
				})
			);
		},
		//End Dropdown Functions
		//AddFeature Project Functions
		addFeature: (index, index2, name, begin, end) => {
			set(
				produce(draft => {
					draft.projectszustand[index].feature[index2].push({
						name,
						begin,
						end,
						id: nanoid(),
						isChecked: false,
						edit: false,
						selected: false,
					});
				})
			);
		},
		//End AddFeatureProject Functions
		//AddTodoProject Functions
		addTodo: (index, index2, name, note, complexity) => {
			set(
				produce(draft => {
					draft.projectszustand[index].feature[index2].todo.push({
						name,
						note,
						complexity,
						id: nanoid(),
						isChecked: false,
						edit: false,
						selected: false,
					});
				})
			);
		},
		//End AddTodoProject Functions
		//AddProjectStep1 Functions
		addProject: (name, notes, begin, end) => {
			set(
				produce(draft => {
					draft.projectszustand.push({
						name,
						notes,
						begin,
						end,
						id: nanoid(),
						selected: false,
						isChecked: false,
						edit: false,
					});
				})
			);
		},
		//End AddProjectStep1 Functions
		//FeatureCardSmall Functions
		deleteFeature: (index, index2) => {
			set(
				produce(draft => {
					draft.projectszustand[index].feature.splice(index2, 1);
				})
			);
		},
		//End FeatureCardSmall Functions
		//FeatureCardListProject Function
		dropSelect: index => {
			set(
				produce(draft => {
					draft.projectszustand.forEach(element => {
						element.selected = false;
					});
					draft.projectszustand[index].selected = !draft.projectszustand[index].selected;
				})
			);
		},
		//End FeatureCardListProject Function
		//Feature View Functions
		openNote: (index, index2, index3) => {
			set(
				produce(draft => {
					draft.projectszustand[index].feature[index2].todo[index3].isOpen =
						!draft.projectszustand[index].feature[index2].todo[index3].isOpen;
				})
			);
		},
		checkFeature: index => {
			set(
				produce(draft => {
					draft.projectszustand[index].feature[index].isChecked =
						!draft.projectszustand[index].feature[index].isChecked;
				})
			);
		},
		checkTodo: (index, index2, index3) => {
			set(
				produce(draft => {
					draft.projectszustand[index].feature[index2].todo[index3].isChecked =
						!draft.projectszustand[index].feature[index2].todo[index3].isChecked;
				})
			);
		},
		//End Feature View Functions
	}))
);

export default useStore;
