import React from 'react';
import TaskCompnent from './TaskComponent';
import TimelinesCompnent from './TimelinesCompnent';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './TaskForm';
import TimelineTaskForm from './TimelineTaskForm';
import {postTask} from './Utils.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "tasks":[],
            "selectedId":null,
            "selectedTask":null,
            "selectedTimelineId":null,
            "selectedTimelineTask":null,
            "timelineTasks":[],
            "showTask":false,
            "showDailyTask":false
        }
    }

    setTasks = (tasks) => {
        this.setState({tasks})
    }

    setSelectedTask = (selectedId) => {
        this.setState({selectedId})
        console.log("selectedId..",selectedId)
        this.setState({
                selectedTask:this.state.tasks.find(({ticketNumber})=>this.state.selectedId===ticketNumber),
                showTask: true,
                showDailyTask: false
        });
    }

    updateSelectedTask = (selectedTask) => {
        console.log("update selectedTask..",selectedTask)
        this.setState(selectedTask)
        postTask(selectedTask)
    }

    getTaskForm(task) {
        if(this.state.showTask === true) {
            return (
                <div id="taskForm">
                    <TaskForm 
                        selectedTask={task}
                        updateSelectedTask={this.updateSelectedTask}/>
                </div>
            );
        }
    }

    setTimelineTasks = (timelineTasks) => {
        this.setState({timelineTasks})
    }

    setSelectedTimelineTask = (selectedTimelineId) => {
        this.setState({selectedTimelineId})
        console.log("selectedTimelineId..",selectedTimelineId)
        this.setState({
                selectedTimelineTask:this.state.timelineTasks.find(({id})=>this.state.selectedTimelineId===id),
                showTask: false,
                showDailyTask: true
        });
    }

    updateSelectedTimelineTask = (selectedTimelineTask) => {
        console.log("update selectedTimelineTask..",selectedTimelineTask)
        this.setState(selectedTimelineTask)
    }

    getTimelineTaskForm(timelineTask) {
        if(this.state.showDailyTask === true) {
            return (
                <div id="taskForm">
                    Timeline form : 
                    <TimelineTaskForm 
                    selectedTimelineTask={timelineTask}
                    updateSelectedTask={this.updateSelectedTimelineTask}/>
                </div>);
        }
    }

    render() {
        const task = this.state.tasks.find(({ticketNumber})=>this.state.selectedId===ticketNumber);
        const timelineTask = this.state.timelineTasks.find(({id})=>this.state.selectedTimelineId===id);
        console.log("this.state.timelineTasks",this.state.timelineTasks)
        console.log("this.state.selectedTimelineId",this.state.selectedTimelineId)
        console.log("timelineTask===",timelineTask)
        return (
            <div className="row">
                <div className="listout">
                    <TaskCompnent 
                        tasks={this.state.tasks}
                        setSelectedTask={this.setSelectedTask}
                        setTasks={this.setTasks}/>
                </div>
                <div id="dash">
                <b>Dashboard</b>
                    {this.getTaskForm(task)}
                    {this.getTimelineTaskForm(timelineTask)}
                </div>
                <div className="listout" id="time">
                    <TimelinesCompnent 
                        timelineTasks={this.state.timelineTasks}
                        setSelectedTimelineTask={this.setSelectedTimelineTask}
                        setTimelineTasks={this.setTimelineTasks}/>
                </div>
            
            </div>
        );
    }
}

export default Dashboard;