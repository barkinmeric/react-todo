import { useState } from "react";

interface FormProps {
	setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Form({ setTodoList }: FormProps) {
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
