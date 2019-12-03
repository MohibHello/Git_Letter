import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import moment from 'moment';

export class InputOffer2Letter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fatherName: '',
            age: '',
            address: '',
            designation: '',
            offerValidity: '',
            companyLocation: '',
            salary: '',
            date: '',

            // validation variable
            showName: '',
            showfatherName: '',
            showAge: '',
            showAddress: '',
            showDesignation: '',
            showCompanyLocation: '',
            showOfferValidity: '',
            showSalary: "",
            showInvalidDate: ''

        }
    }


    componentDidMount() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const nth = (d) => {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }

        let today = new Date();
        let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        this.setState({
            date: currentdate
        })


        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let name = (document.getElementById("name").value).trim();
                let fatherName = (document.getElementById("fatherName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let offerValidity = (document.getElementById("offerValidity").value).trim();
                let address = (document.getElementById("address").value).trim();
                let age = (document.getElementById("age").value).trim();
                let salary = (document.getElementById("salary").value).trim();
                let selectedDate = new Date(offerValidity).setHours(23);
                let TodaysDate = new Date()






                if (offerValidity === "") {
                    that.setState({ showOfferValidity: true })
                }
                if (salary === "") {
                    that.setState({ showSalary: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (age === "") {
                    that.setState({ showAge: true })
                }
                if (address === "") {
                    that.setState({ showAddress: true })
                }


                if (fatherName === "") {
                    that.setState({ showFatherName: true })
                }
                if (name === "") {
                    that.setState({ showName: true })
                }


                if (selectedDate < TodaysDate) {
                    that.setState({
                        showInvalidDate: "true"
                    })

                    return false;
                }

                if (designation != "" && companyLocation != "" && name != "" && offerValidity !== "" && fatherName != "" && age != "" && address != "" && salary != "") {
                    console.log("True return")
                    return true;

                }
                else {
                    console.log("false")
                    return false;
                }
            });
        });

    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/Offerletter2')
    }


    hideEmployeeName = () => {
        this.setState({
            showName: false
        })
    }
    hideFatherName = () => {
        this.setState({
            showFatherName: false
        })
    }
    hideAddress = () => {
        this.setState({
            showAddress: false
        })
    }
    hideAge = () => {
        this.setState({
            showAge: false
        })
    }
    hideSalary = () => {
        this.setState({
            showSalary: false
        })
    }

    hideOfferValidity = () => {
        this.setState({
            showOfferValidity: false
        })
    }

    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
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
                                        <h3 className="text-center blue-text font-bold ">Offer Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" label="Name" type="text" name="name" id="name" title="name" onChange={(event) => {
                                                        this.setState({
                                                            name: event.target.value
                                                        });
                                                        this.hideEmployeeName()
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" label="Father Name" type="text" name="fatherName" id="fatherName" title="Company Location" onChange={(event) => {
                                                        this.setState({
                                                            fatherName: event.target.value
                                                        }); this.hideFatherName();
                                                    }} />
                                                </div>
                                            </div>


                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showName ? <div id="errordiv" className="container-fluid">Please fill out Employee Name field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showFatherName ? <div id="errordiv" className="container-fluid">Please fill out Father Name field * </div> : null}

                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" label="Address" type="text" name="address" id="address" title="address" onChange={(event) => {
                                                        this.setState({
                                                            address: event.target.value
                                                        }); this.hideAddress()
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" label="Age" type="text" name="age" id="age" title="Age" onChange={(event) => {
                                                        this.setState({
                                                            age: event.target.value
                                                        }); this.hideAge()
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showAddress ? <div id="errordiv" className="container-fluid">Please fill out Address field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showAge ? <div id="errordiv" className="container-fluid">Please fill out Age field * </div> : null}

                                                </div>
                                            </div>



                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        });this.hideDesignation()
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" label="Company Location" type="text" name="companyLocation" id="companyLocation" title="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        });this.hideCompanyLocation()
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}

                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" label="Salary" type="text" name="salary" id="salary" title="salary" onChange={(event) => {
                                                        this.setState({
                                                            salary: event.target.value
                                                        });this.hideSalary();
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" onClick={() => { this.hideOfferValidity(); this.hideInvalidDate() }} onKeyPress={() => { this.hideInvalidDate() }} type="date" label="Offer Validity" title="Offer Validity" name="offerValidity" id="offerValidity" onChange={(event) => {
                                                        this.setState({
                                                            offerValidity: event.target.value
                                                        }); this.hideOfferValidity(); this.hideInvalidDate();
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showSalary ? <div id="errordiv" className="container-fluid">Please fill out Salary field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showOfferValidity ? <div id="errordiv" className="container-fluid">Please fill out Offer Validity field * </div> : null}
                                                    {this.state.showInvalidDate ? <div id="errordiv" className="container-fluid">Offer Date must be greater or equal to today's date* </div> : null}
                                                </div>
                                            </div>




                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn type="submit" id="genrate" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
export default withRouter(InputOffer2Letter)

