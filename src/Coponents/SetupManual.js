import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Setupmanual.css'
import { useNavigate } from 'react-router-dom';

const SetupManual = () => {
    const navigate = useNavigate()

    const amazon1=()=>{
        navigate("/choose")
    
      }
    return (
        <div>
            {/* <nav class="navbar ">
                <div class="container-fluid d-flex">
                <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/group.png')} alt='UFC Logo' className='img001' />



                    <div class="shape justify-content-end"></div>
                </div>


            </nav> */}






            <div className=' chooseicon  d-flex justify-content-center'>
                <div className='container Rectangle mx-5 py-5 my-5'>
                    <div className='spotcon'>
                        <div className='cont'>
                            <p className='spot'>SpotWorks</p>
                            <p className='spot2'>Powered by [X]Cube LABS</p>

                        </div>
                        <div className='py-5'>
                            <h5>Connect an AWS Account to Optimize its Costs</h5>
                            <p >

                                There’s no need to worry, SpotWorks will never modify any of your existing workloads
                            </p>


                        </div>
                        <div className='display3 mx-5 px-5 spotcon'>
                            <div className='spotcon'>
                                <button className='btn manual px-5'>Manual Connection

                                </button>
                            </div>
                            <div>
                                <button className='btn connection px-5'>SpotWorks Connections</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='display'>
                        <div>
                            <button className='btn manual'>Manual Connection

                            </button>
                        </div>
                        <div>
                            <button className='btn connection'>SpotWorks Connections</button>
                        </div>
                    </div> */}

                    <div className='question'>
                        <h5 className='head py-3'>STEP1</h5>
                        <p className='content2 py-1'>Are you connecting to SpotWorks with an AWS China account ?</p>
                        <input className='mx-3' type="radio" />Yes
                        <input className='mx-3' type="radio" />No
                        <p className='content2 py-2' >Are you connecting to SpotWorks with an AWS GovCloud account ?</p>
                        <input className='mx-3' type="radio" />Yes
                        <input className='mx-3' type="radio" />No
                        <h5 className='head py-2'>STEP2</h5>
                        <div className='display2 py-1'>
                            <p className='content2 '>Open the IAM console.</p>
                            <button className='btn connection button2 px-4 mx-5'>Open</button>

                        </div>
                        <h5 className='head'>STEP3</h5>
                        <div className='display2 py-2'>
                            <p className='content2'>Click the Policies tab on the sidebar, and select 'Create Policy'.<br />
                                Switch to JSON tab.<br />
                                Paste the attached policy and click 'Review Policy'.<br />
                                Set the policy name to Spot-Policy and click 'Create Policy'.</p>
                            <button className='btn connection button2 px-4 mx-5'>View Policy</button>
                        </div>
                        <h5 className='head py-1'>STEP4</h5>
                        <p className='content2'>Click the Roles tab on the sidebar, and click 'Create Role'.<br />
                            Select another AWS account and enter Account ID: 922761411349</p>
                        <h5 className='head'>STEP5</h5>
                        <p className='content2'>Click the Require external ID checkbox and enter the External ID:spotinst:aws:extid:o527bf22o0000000</p>
                        <p className='content2'>When you are finished, click 'Next'.</p>
                        <h5 className='head'>STEP6</h5>
                        <div className='display2 py-2'>
                            <p className='content2'>Set role name: SpotWorks-Role, Copy the RoleArn from <br />
                                the role’s screen and paste it here:</p>
                            <button className='btn connection button3 '>Email Id</button>
                        </div>
                        <div className='display py-3'>
                            <div>
                                <button className='btn backbtn  mx-4' onClick={amazon1}>BACK

                                </button>
                            </div>
                            <div>
                                <button className='btn connectbtn connection mx-1'>CONNECT</button>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </div>
    )
}

export default SetupManual
