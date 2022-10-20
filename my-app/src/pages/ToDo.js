import { useState } from 'react';
import PropTypes from 'prop-types';
import './Pages.scss';
// [Bootstrap]
import Container from 'react-bootstrap/Container';
// [Components]
import ComponentBtn from '../components/component-btn/ComponentBtn';
import TaskHeader from '../components/example/TaskHeader';
import Tasks from '../components/example/Tasks';
import AddTask from '../components/example/AddTask';

function ToDo({ sm, title, onAddTaskBlock }) {
  // [Hardcoded] Data
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tasktitle: 'Note #1',
      content: 'Lorem ipsum dolor sit amet, qui.',
      reminder: false,
    },
    {
      id: 2,
      tasktitle: 'Note #2',
      content: 'Minim lab cillum sint consectetur cupidatat.',
      reminder: true,
    },
  ])

  // 1# Add New Task
  const addTask = (task) => {
    console.log(task)
    // Generate Random [ID]
    const id = Math.floor(Math.random() * 10000) +1
    console.log(id)
    // New Task
    const newTask = { id, ...task }
    // Add New Task to List
    setTasks([...tasks, newTask])
  }

  // 2# Delete Task
  const deleteTask = (id) => {
    console.log('Delete Task ID: ',id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // 3# Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    // Double-Click Set Bool Val true/false
    setTasks(tasks.map(
      (task) => task.id === id ? {
        ...task, reminder: !task.reminder
      } : task
    ))
  }

  return (
    <div>
      <Container>
        <TaskHeader showAddTaskBlock={showAddTask}
                    onAddTaskBlock={() => setShowAddTask(!showAddTask)}
        />
        { showAddTask && <AddTask onAdd={addTask}/> }
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To Show!'}
      </Container>
    </div>
    /*
    <div className='p-3 fw-bold'>
      <div>
        <Container>
          <div>
            <small>{ sm }</small>
            <h1 className='mb-3'>{ title }</h1>

            <ComponentBtn color={showAdd ? 'danger' : 'success'}
                          onClick={onAdd}
                          txt={showAdd ? 'CLOSE' : 'ADD NEW TASK'}
                          showAddBlock={showAddTask}
                          onAdd={() => setShowAddTask(!showAddTask)}
            />

            { showAddTask && <AddTask onAdd={addTask}/> }

            { tasks.length > 0 ?
              <Tasks tasks={tasks}
                   onDelete={deleteTask}
                   onToggle={toggleReminder}
            /> : 'No Task To Show!'}
          </div>
        </Container>
      </div>
    </div> */
  );
}

export default ToDo;
