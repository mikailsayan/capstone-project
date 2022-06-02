import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		projects: [
			{
				id: nanoid(),
				name: 'Projekt 1',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/01/2001',
				end: '02-01-2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'blue',
				edit: false,
				selected: true,
				feature: [
					{
						id: nanoid(),
						name: 'Feature 1',
						begin: '01/01/2001',
						end: '02-01-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
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
						begin: '01-02-2001',
						end: '02-02-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
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
				begin: '01-02-2001',
				end: '02-02-2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'green',
				edit: false,
				selected: false,
				feature: [
					{
						id: nanoid(),
						name: 'Feature 3',
						begin: '01-01-2001',
						end: '02-01-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
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
						begin: '01-02-2001',
						end: '02-02-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
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
		addFeatureState: false,
		//appState Functions
		appState: 'projects',
		setAppState: appState => {
			set({ appState });
		},
		//End AppState Functions
		//FeatureCard Functions
		selectFeature: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature.forEach(element => {
						element.selected = false;
					});
					console.log(draft.projects);
					draft.projects[projectIndex].feature[featureIndex].selected =
						!draft.projects[projectIndex].feature[featureIndex].selected;
				})
			);
		},
		toggleEdit: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].edit =
						!draft.projects[projectIndex].feature[featureIndex].edit;
				})
			);
		},
		toggleAddTodo: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].addtodo =
						!draft.projects[projectIndex].feature[featureIndex].addtodo;
				})
			);
		},
		closeFeatureView: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].selected = false;
				})
			);
		},
		//End FeatureCard Functions
		//EditFeature Project Functions
		controlFeature: (projectIndex, featureIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].name = value;
				})
			);
		},
		controlBegin: (projectIndex, featureIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].begin = value;
				})
			);
		},
		controlEnd: (projectIndex, featureIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].end = value;
				})
			);
		},
		//End EditFeature Functions
		//AddFeatureFunction
		toggleAdd: () => {
			set(
				produce(draft => {
					draft.addFeatureState = !draft.addFeatureState;
				})
			);
		},
		addFeature: (projectIndex, name, begin, end) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature.push({
						name,
						begin,
						end,
						id: nanoid(),
						isChecked: false,
						edit: false,
						selected: false,
						todo: [],
					});
				})
			);
		},
		//End AddFeatureFunction
		//AddTodo Functions
		addTodo: (projectIndex, featureIndex, name, note, complexity) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo.push({
						name,
						note,
						complexity,
						id: nanoid(),
						isChecked: false,
						edit: false,
						isOpen: false,
						selected: false,
					});
				})
			);
		},
		//End AddTodo Functions
		//AddProject Functions
		addProject: (name, notes, begin, end) => {
			set(
				produce(draft => {
					draft.projects.push({
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
		//End AddProject Functions
		//FeatureCard Functions
		deleteFeature: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature.splice(featureIndex, 1);
				})
			);
		},
		//End FeatureCard Functions
		//FeatureCardList Function
		dropSelect: projectIndex => {
			set(
				produce(draft => {
					draft.projects.forEach(element => {
						element.selected = false;
					});
					draft.projects[projectIndex].selected = !draft.projects[projectIndex].selected;
				})
			);
		},
		//End FeatureCardList Function
		//Feature View Functions
		openNote: (projectIndex, featureIndex, todoIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].isOpen =
						!draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].isOpen;
				})
			);
		},
		checkFeature: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].isChecked =
						!draft.projects[projectIndex].feature[featureIndex].isChecked;
				})
			);
		},
		checkTodo: (projectIndex, featureIndex, todoIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].isChecked =
						!draft.projects[projectIndex].feature[featureIndex].todo[todoIndex]
							.isChecked;
				})
			);
		},
		//End Feature View Functions
	}))
);

export default useStore;
