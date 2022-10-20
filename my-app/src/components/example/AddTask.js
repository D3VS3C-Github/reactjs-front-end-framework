import { useState } from 'react';
// [Bootstrap]
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// [Components]
import ComponentBtn from '../component-btn/ComponentBtn';

const AddTask = ({ onAdd }) => {
  const [tasktitle, setTaskTitle] = useState('')
  const [content, setContent] = useState('')
  const [reminder, setReminder] = useState(false)

  // onSubmit e (event)
  const onSubmit = (e) => {
    // Prevent onSubmit When 'empty'
    e.preventDefault()
    if (!tasktitle) {
      alert('Please enter a task!')
      return
    }
    // onAdd passes in Objects
    onAdd({ tasktitle, content, reminder })
    // Clear the Form
    setTaskTitle('')
    setContent('')
    setReminder(false)
  }

  return (
    <Form onSubmit={onSubmit}>

      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' 
                      placeholder='Title'
                      value={tasktitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

     <Form.Group className='mb-3'>
        <Form.Label>Content</Form.Label>
        <Form.Control type='text'
                      placeholder='Add new task'
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

     <Form.Group className='mb-3'>
        <Form.Label></Form.Label>
        <Form.Check type='checkbox'
                    label='Reminder'
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder}
        >
        </Form.Check>
      </Form.Group>
      
      <Button className='mb-5'
              variant='primary'
              type='submit'
              value='Save Task'
      > Save
      </Button>

    </Form>
  );
}

export default AddTask;
