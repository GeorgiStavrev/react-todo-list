import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css'

export default class List extends React.Component {
    render() {
        const { item, onClick, onClickOption1, onClickOption2 } = this.props
        return (    
            <ReactCSSTransitionGroup
                transitionName="listItem"
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>  
                <div style={styles.item}>
                    <div style={item.completed ? styles.col1completed : styles.col1} onClick={() => onClick(item.id)}>{item.text}</div>
                    <div style={styles.col2} onClick={() => onClickOption1(item.id)}>🗑</div>
                    <div style={styles.col3} onClick={() => onClickOption2(item.id)}>{item.important ? "❤️️" : "" }</div>
                </div>
            </ReactCSSTransitionGroup>
        );
    };
}

const styles = {
    item: {
        backgroundColor: "whitesmoke",
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch"
    },
    col1: {
        padding: 15,
        minWidth: "70%",
        maxWidth: "90%",
        flex: 1,
        backgroundColor: "#CAC",
    },
    col1completed: {
        padding: 15,
        minWidth: "70%",
        maxWidth: "90%",
        flex: 1,
        backgroundColor: "#CAB",
        textDecoration: "line-through"
    },
    col2: {
        padding: 15,
        maxWidth: "5%",
        textAlign: "center",
        flex: 1,
        backgroundColor: "#CBCBCB"
    },
    col3: {
        padding: 15,
        maxWidth: "5%",
        textAlign: "center",
        flex: 1,
        backgroundColor: "skyblue"
    }
};