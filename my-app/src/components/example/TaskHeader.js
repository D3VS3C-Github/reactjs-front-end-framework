import PropTypes from 'prop-types';
import ComponentBtn from '../../components/component-btn/ComponentBtn';

const TaskHeader = ({ sm, heading, onAddTaskBlock, showAddTaskBlock }) => {
  return (
    <header>
      <small>{ sm }</small> 
      <h1>{ heading }</h1>
      <ComponentBtn color={showAddTaskBlock ? 'danger' : 'success'}
                    txt={showAddTaskBlock ? 'CLOSE' : 'ADD NEW TASK'}
                    onClick={onAddTaskBlock}
      />
    </header>
  );
}

TaskHeader.defaultProps = {
  sm: 'OPENSOURCE PROJECT | React JS - ToDo',
  heading: 'REACT.JS TO-DO APP',
}

TaskHeader.propTypes = {
  sm: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
}

export default TaskHeader;
