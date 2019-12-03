import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';


export class InputIntershipLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            internName: '',
            internId: '',
            companyLocation: '',
            startDate: '',
            endDate: '',
            date: '',

        showinternName: '',
        showinternId:'',
        showcompanyLocation: '',
        showstartDate: '',
        showendDate: '',
        showinvalidDate:''
        }
    }

    componentDidMount() {

        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {

                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
        
        
              const nth = (d)=> {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                  case 1:  return "st";
                  case 2:  return "nd";
                  case 3:  return "rd";
                  default: return "th";
                }
              }
        
                let today = new Date();
                let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                that.setState({
                    date:  currentdate
                })
        

               
                 let internName = (document.getElementById("internName").value).trim();
                 let internId = (document.getElementById("internId").value).trim();
                 let companyLocation = (document.getElementById("companyLocation").value).trim();
                 let startDate = (document.getElementById("startDate").value).trim();
                 let endDate = (document.getElementById("endDate").value).trim();
                 let selectedstartDate = new Date(startDate)
                let selectedendDate =new Date(endDate)
 
                 if (internId === "") {
                     that.setState({ showinternId: true })
                 }
                 if (companyLocation === "") {
                     that.setState({ showcompanyLocation: true })
                 }
                 if (internName === "") {
                     that.setState({ showinternName: true })
                 }
 
                 if (startDate === "") {
                     that.setState({ showstartDate: true })
                 }
                 if (endDate === "") {
                     that.setState({ showendDate: true })
                 }


                 if(selectedendDate<selectedstartDate){
                    that.setState({
                       showinvalidDate:true
                    }) 

                   return false;
              } 
                
 
                 if (internId != "" && companyLocation != "" && internName != "" && startDate !== "" &&  endDate!="" ) {
                     console.log("True return")
                     return true;
                 }
                 else {
                     return false;
                 }
            });
        });
    }

    hideinternName = () => {
        this.setState({
            showinternName: false
        })
    }
    hideinternId = () => {
        this.setState({
            showinternId: false
        })
    }
    hidecompanyLocation = () => {
        this.setState({
            showcompanyLocation: false
        })
    }
   
    hidestartDate = () => {
        this.setState({
            showstartDate: false
        })
    }
    hideendDate = () => {
        this.setState({
            showendDate: false
        })
    }
    hideInvalidDate=()=>{
        this.setState({
            showinvalidDate:false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/IntershipLetter')

    }





    render() {
        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">Intership Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">

                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off"  name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>

                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-9">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideinternName} label="Intern Name" className="w-100" name="internName" title="Intern Name" id="internName" onChange={(event) => {
                                                        this.setState({
                                                            internName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{padding:0}}>
                                               <div className="col-3 p-0" >
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showinternName ? <div id="errordiv" className="container-fluid">Please fill out Intern Name field * </div> : null}
                                               </div>
                                           </div>


                                           <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideinternId} label="Intern Id" className="w-100" name="internId" title="Employe Id" id="internId" onChange={(event) => {
                                                        this.setState({
                                                            internId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hidecompanyLocation} label="Company Location" type="text" name="companyLocation" id="companyLocation" title="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col-6 p-0">
                                                    {this.state.showinternId ? <div id="errordiv" className="container-fluid">Please fill out Intern Id field * </div> : null}
                                                    </div>
                                                    <div className="col-6 p-0">
                                                    {this.state.showcompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}
                                                    </div>
                                            </div>




                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={this.hidestartDate} onKeyPress={this.hidestartDate} type="date" label="Intership Start Date" title="Joining Date" name="startDate" id="startDate" onChange={(event) => {
                                                        this.setState({
                                                            startDate: event.target.value
                                                        });this.hidestartDate();
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={()=>{this.hideendDate();this.hideInvalidDate()}} onKeyPress={()=>{this.hideendDate();this.hideInvalidDate()}}  type="date" label="Intership End Date" title="endDate" name="endDate" id="endDate" onChange={(event) => {
                                                        this.setState({
                                                            endDate: event.target.value
                                                        });this.hideendDate();this.hideInvalidDate()
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showstartDate ? <div id="errordiv" className="container-fluid">Please fill out Internship Start Date field * </div> : null}
                                                
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showendDate ? <div id="errordiv" className="container-fluid">Please fill out Internship End Date field * </div> : null}
                                               {this.state.showinvalidDate ? <div id="errordiv" className="container-fluid">Internship End Date greater or equal to Internship Start Date * </div> : null}
                                               </div>
                                           </div>
                                            

                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(InputIntershipLetter)