import { Component } from "react";

class CounterDashboard extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            step: 1
        }
    }
    static getDerivedStateFromProps(){
        console.log("Component is going to be mounted");
        return null;
    }
    handleStepChange = (e)=>{
        e.preventDefault();
        const newStep = Number(e.target.elements.step.value);
        this.setState(()=>{
            return {step: newStep};
        })
    }

    handleIncrement = ()=>{
        this.setState({ count: this.state.count+this.state.step});
    }

    handleDecrement = ()=>{
        this.setState({count: this.state.count-this.state.step})
    }

    handleReset = ()=>{
        this.setState(()=>({count: 0, step: 1}))
    }

    componentDidMount = async ()=>{
        console.log("We are going to fetch data")
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log("Fetched Data",data);
        console.log("Data is being fetched");
    }

    componentDidUpdate = (prevProps, prevState)=>{
        console.log("Previous state", prevState);
    }

    render (){
        return <>
            <h3>{this.state.count}</h3>
            <p>{this.state.step}</p>
            <form onSubmit={this.handleStepChange}>
                <label htmlFor="step">Change Step to Increase or Decrease</label>
                <input type="number" id="step" defaultValue={this.state.step}/>
                <button type="submit">Change Step</button>
            </form>
            <button onClick={this.handleIncrement}>Inc+</button>
            <button onClick={this.handleDecrement}>Dec-</button>
            <button onClick={this.handleReset}>Reset</button>
        </>
    }

}

export default CounterDashboard;