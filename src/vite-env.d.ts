/// <reference types="vite/client" />

type UID = `${string}-${string}-${string}-${string}-${string}`;

interface Todo {
	id: UID;
	text: string;
	completed: boolean;
}
