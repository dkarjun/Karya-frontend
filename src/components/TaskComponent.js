import React from 'react';
import TaskCard from './TaskCard.js'
import PropTypes from 'prop-types'
import {fetchTasks} from './Utils.js'
class TaskCompnent extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            "selectedTask":""
        };
    }

    componentDidMount() {
        fetchTasks(this.props.setTasks);
    }

    render() {
        if (!this.props.tasks.length) {
            return null;
        }
        return (
            <div style={{marginBottom: '85px'}}>
                <div id="tasksHeader">
                    <h2>Tasks</h2>
                </div>
                {this.props.tasks.map((task,index) => 
                    <TaskCard
                        key={index}
                        taskDetails={task}
                        setTaskId={this.props.setSelectedTask}
                        />
                )}    
            </div>
        );
    }
}

TaskCompnent.propTypes = {
    taskDetails: PropTypes.object,
    getSelectedTask: PropTypes.func
}

TaskCompnent.defaultProps = {
    taskDetails: {
        "name":"default HSBC Ebanking integration",
        "ticketNumber":"default PSDS-4661",
        "status":"default In-progress"
    },
    getSelectedTask: function onClick() {}
};

export default TaskCompnent;