// const ReactElement = React.createElement('button', null, 'My button from class component')

// function ReactComponent( {text} ) {

//     function clickHandler(name) {
//         alert(`Hello ${name}`)
//     }

//     function changeHanler(event) {
//         console.log(event.currentTarget.value)
//     }

//     return (
//         <div>
//              <button onClick={() => clickHandler('Jhone')}> {text} </button>
//              <input onChange={changeHanler} type="text" />
//         </div>
//     )
// }

//map
//filter

class ReactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: 'default text', list: [
            {id: 0, data: '123'},
            {id: 1, data: '4124'},
            {id: 2, data: '1241'},
            {id: 3, data: '124124'}
        ]}
       

        this.clickHandler = this.clickHandler.bind(this)
        this.changeHanler = this.changeHanler.bind(this)
    }

    clickHandler(name) {
        alert(`Hello ${name}`)
    }

    changeHanler(event) {
        // this.setState({text: event.currentTarget.value})
        this.setState((state, props) => ({text: 'state text:' + state.text + ',' + 'props text:' + props.text}))
        console.log(event.currentTarget.value)
        this.setState({list: this.state.list.filter(item => item.id !== +event.currentTarget.value)})
    }

    render() {
        // return (ReactElement)
        return (
        <div>
            <button onClick={() => this.clickHandler('Jhone')}> {this.props.text} </button>
            <input onChange={this.changeHanler} type="text"/> <br/>
            {this.state.text}
            {this.state.list.map( item => <div key={item.id}>{item.data}</div>)}
        </div>
        )
    }
}

ReactDOM.render(<ReactComponent text='name from props'/>, document.getElementById('root'))