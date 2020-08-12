import React from 'react';
import TimelineCard from './TimelineCard';
import {fetchTimelineTasks} from './Utils'

class TimelinesCompnent extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            "selectedTimelineTask":""
        };
    }

    componentDidMount() {
        fetchTimelineTasks(this.props.setTimelineTasks);
        console.log("timeline..",this.props.timelineTasks)
    }

    
    render() {
        if (!this.props.timelineTasks.length) {
            return null;
        }
        return (
            <div style={{marginBottom: '85px'}}>
                <h2>Daily Tasks</h2>
                {this.props.timelineTasks.map((task,index) => 
                <TimelineCard
                        key={index}
                        timelineTask={task}
                        setTimelineTaskId={this.props.setSelectedTimelineTask}
                        />
                )}
                
            </div>
        );
    }
}

export default TimelinesCompnent;