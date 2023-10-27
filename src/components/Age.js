import {Component} from "react";
class Age extends Component{
    constructor(){
        super();
        this.state={age:null}
    }
    calculate=()=>{
        const dob=document.getElementById("dob").value;
        const date=new Date();
        const arr=dob.split("-");
        console.log()
        if(date.getFullYear()<=Number(arr[0])){
            console.log("if")
            this.setState(
                {age:"0"}
            )
        }
        else if((date.getMonth()>Number(arr[1])-1)){
            console.log("else if 1")
            this.setState({age:date.getFullYear()-Number(arr[0])})
        }
        else if((date.getMonth()===Number(arr[1])-1)){
            console.log("else if 2")
            if(date.getDate()>=Number(arr[2])){
                console.log("else if if")
                this.setState({age:date.getFullYear()-Number(arr[0])})
            }
            else{
                console.log("else if else")
                this.setState({age:date.getFullYear()-Number(arr[0])-1})
            }
        }
        else{
            console.log("else")
            this.setState({age:date.getFullYear()-Number(arr[0])-1})
            
        }
        console.log(this.state.age);
    }
    render(){
        return(
            <div className="container-fluid mx-5">
                <div className="main"> 
                    <h1 style={{fontSize:60}}>Age Calculator</h1><br />
                    <h3>Enter your date of birth</h3>
                    <br />
                    <input type="date" id="dob" name="form-control p-5" /><br />
                    <div>
                        <button onClick={this.calculate} className="btn btn-primary">Calculate Age</button><br />
                    </div>
                    <br />
                    <h1>You are {this.state.age} years old</h1>
                </div>
            </div>
        )
    }
}
export default Age;