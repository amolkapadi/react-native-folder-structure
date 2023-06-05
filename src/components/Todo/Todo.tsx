import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TodoItem {
  id: number;
  title: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [text, setText] = useState('');
  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleAddTodo = () => {
    if (text.trim().length === 0) return;
    const newTodo = { id: Date.now(), title: text };
    setTodos([...todos, newTodo]);
    setText('');
  };

  const handleEditTodo = (todo: TodoItem) => {
    setEditingTodo(todo);
    setEditingText(todo.title);
  };

  const handleUpdateTodo = () => {
    if (editingTodo === null || editingText.trim().length === 0) return;
    const updatedTodo = { ...editingTodo, title: editingText };
    const newTodos = todos.map(todo => (todo.id === editingTodo.id ? updatedTodo : todo));
    setTodos(newTodos);
    setEditingTodo(null);
    setEditingText('');
  };

  const handleRemoveTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo..."
          placeholderTextColor="#ccc"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Ionicons name="add-circle-outline" size={32} color="green" />
        </TouchableOpacity>
      </View>
      {todos.map(todo => (
        <View key={todo.id} style={styles.todoItem}>
          {editingTodo === todo ? (
            <>
              <TextInput
                style={[styles.input, styles.editInput]}
                value={editingText}
                onChangeText={setEditingText}
              />
              <TouchableOpacity onPress={handleUpdateTodo}>
                <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setEditingTodo(null)}>
                <Ionicons name="close-circle-outline" size={24} color="red" />
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.output}>
              <Text style={styles.todoTitle}>{todo.title}</Text>
              <TouchableOpacity onPress={() => handleEditTodo(todo)}>
                <Ionicons name="create-outline" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveTodo(todo.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  output:{
    flexDirection: 'row',
    
  },
  container: {
    flex: 1,
    padding:30,
    backgroundColor: 'white',
   marginTop:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth:1,
    borderBottomColor: 'green',
borderBottomWidth: 1,
fontSize: 18,
paddingVertical: 5,
paddingHorizontal: 10,
flex: 1,
marginRight: 10,
},
todoItem: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
todoTitle: {
  paddin:5,
fontSize: 18,
marginRight: 10,
flex: 1,
},
editInput: {
  borderBottomColor: 'green',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
},
});

export default Todo;
