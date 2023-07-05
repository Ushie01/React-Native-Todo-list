import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default TodoItem = ({ item, pressHandler }) => {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<View styles={styles.item}>
				<MaterialIcons
					name='delete'
					size={18}
					color='#333'
				/>
				<Text style={styles.itemText}>{item.name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: '#bbb',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		flexDirection: 'row',
	},
	itemText: {
		marginLeft: 10,
	},
});
