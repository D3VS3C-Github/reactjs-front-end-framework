import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import ComponentBtn from '../component-btn/ComponentBtn';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Card className={`mb-4 ${task.reminder ? 'fw-bolder' : ''}`}
          onDoubleClick={() => onToggle(task.id)}
    >
      <Card.Body>
        <Card.Title>{ task.tasktitle }</Card.Title>
        <Card.Text>{ task.content }</Card.Text>
        <ComponentBtn color={'danger'}
                      onClick={ () => onDelete(task.id) }
                      txt={'Delete'}
        >
        </ComponentBtn>
       </Card.Body>
    </Card>
  );
}

export default Task;
