import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
	const [todoList, setTodoList] = useState<Todo[]>(() => {
		const localData = localStorage.getItem("todoList");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);

	return (
		<section className="min-h-screen w-screen bg-black">
			<Form setTodoList={setTodoList} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</section>
	);
}
