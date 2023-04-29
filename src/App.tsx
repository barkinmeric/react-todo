import { useEffect, useState } from "react";

type Todo = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	text: string;
	completed: boolean;
};

function Form({ setTodoList }: { setTodoList: React.Dispatch<React.SetStateAction<Todo[]>> }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTodoList((currentTodoList) => [{ id: crypto.randomUUID(), text: value, completed: false }, ...currentTodoList]);
		setValue("");
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="mx-auto flex max-w-lg flex-col py-8 text-center text-white">
			<label htmlFor="textInput" className="bg-gray-900 p-2 text-lg font-bold">
				Add New Item
			</label>
			<input
				id="textInput"
				value={value}
				className=" p-2 text-black"
				onChange={(e) => setValue(e.target.value)}
				type="text"
				placeholder="Enter..."
			/>
			<button type="submit" className="bg-green-700 p-2">
				Add
			</button>
		</form>
	);
}

function TodoList({ todoList, setTodoList }: { todoList: Todo[]; setTodoList: React.Dispatch<React.SetStateAction<Todo[]>> }) {
	const handleDelete = (id: `${string}-${string}-${string}-${string}-${string}`) => {
		setTodoList(todoList.filter((item) => item.id !== id));
	};

	const toggleTodo = (id: `${string}-${string}-${string}-${string}-${string}`, completed: boolean) => {
		setTodoList(
			completed
				? [...todoList.filter((item) => item.id !== id), { ...todoList.filter((item) => item.id === id)[0], completed }]
				: [{ ...todoList.filter((item) => item.id === id)[0], completed }, ...todoList.filter((item) => item.id !== id)],
		);
	};

	return (
		<div className="mx-auto flex max-w-lg flex-col text-center text-white ">
			<h1 className="bg-gray-900 p-2 text-lg font-bold ">Todo List</h1>
			<ul>
				{todoList.map((item) => (
					<li key={item.id} className="flex items-center  justify-between bg-gray-700 p-2">
						<div className={item.completed ? "p-2 line-through opacity-50" : "p-2"}>
							<input
								id="checkboxInput"
								onChange={(e) => toggleTodo(item.id, e.target.checked)}
								className="mr-2"
								type="checkbox"
								checked={item.completed}
							/>
							<label htmlFor="checkboxInput">{item.text}</label>
						</div>
						<button type="button" onClick={() => handleDelete(item.id)} className="rounded-md bg-red-600 p-2 text-white">
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function App() {
	const [todoList, setTodoList] = useState<Todo[]>(() => {
		const localData = localStorage.getItem("todoList");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);

	return (
		<section className=" min-h-screen w-screen bg-black">
			<Form setTodoList={setTodoList} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</section>
	);
}

export default App;
