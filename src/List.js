import React from 'react'

export default class List extends React.Component {
    renderItem = (item) => {
        const { onClickItem, onClickItemOption1, onClickItemOption2 } = this.props
        return (
            <div style={styles.item} key={item.id}>
                <div style={item.completed ? styles.col1completed : styles.col1} onClick={() => onClickItem(item.id)}>{item.text}</div>
                <div style={styles.col2} onClick={() => onClickItemOption1(item.id)}>🗑</div>
                <div style={styles.col3} onClick={() => onClickItemOption2(item.id)}>{item.important ? "❤️️" : "" }</div>
            </div>
        );
    };

    render() {
        const { items } = this.props
        return (
            <div style={styles.container}>
                {items.map(this.renderItem)}
            </div>
        );
    };
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
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