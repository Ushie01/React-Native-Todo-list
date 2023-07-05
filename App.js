import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
	const [todos, setTodos] = useState([
		{ name: 'Morning Prayer', key: '1' },
		{ name: 'Go to morning mass', key: '2' },
		{ name: 'Program all day long', key: '3' },
	]);  

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};

	const submitHandler = (text) => {
		console.log(text);

		setTodos((prevTodos) => {
			return [
				{name: text, key: Math.random().toString()},
				...prevTodos
			]
		})

	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<AddTodo submitHandler={submitHandler} />
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({item}) => <TodoItem item={item} pressHandler={pressHandler} />}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}, 
	content: {
		padding: 40,
	}, 
	list: {
		marginTop: 20
	}
});
