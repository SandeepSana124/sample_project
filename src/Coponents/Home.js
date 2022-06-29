import React from 'react'


function Home() {
  return (
    <div className='container mt-3 bg-color'>
        <div className='row -3'>
            <div className='col-12 col-lg-6 col-md-4 d-flex '>
                <div className='img mt-3'>
                    <div className='bg '>
                    <p className='p'>Our Approach</p>
                    </div>
                    <div className='main-heading'>
                    <h1 className='top-name'>
                        FROM <div className='box'><span className='Assessment'>ASSESSMENT</span>
                            </div> TO <span className='live-ops'>LIVE-OPS,</span>
                        WE'VE GOT YOU COVERED

                    </h1>
                    </div>
                   

                </div>
                <div className='container mt-5 p-3'>
<div className='row d-flex'>

  {/* card 1 */}

<div className='left-card mt-5' >
                        <div className='card1 '>
                                <p className="bg-dark" >01</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle.png")}/>
                                        </div>
                                        <div>
                                            <h5>ANALYSIS</h5>
                                            <p className='width-p text-muted'>To begin with, We study your existing architecture in detail and identify services and components that can be transformed
</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>

{/* card 2 */}
                    <div className='card mt-5'>
                        <div className='card1 '>
                                <p className="bg-dark" >02</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle1.png")}/>
                                        </div>
                                        <div>
                                            <h5>ADAPTATION</h5>
                                            <p className='width-p text-muted'>
                                            This is where we determine the required changes in your existing processes, such as adding fault tolerance capabilities and workload transformation
</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>

                    {/* card 3 */}

                    <div className='left-card mt-5 '>
                        <div className='card1 '>
                                <p className="bg-dark" >03</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle2.png")}/>
                                        </div>
                                        <div>
                                            <h5>ONBOARDING</h5>
                                            <p className='width-p text-muted'>
                                            All those services/components that are identified for transforming are deployed using [x]cube framework to AWS without any service interruption
</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>


{/* card-4 */}


<div className='card mt-5 '>
                        <div className='card1 '>
                                <p className="bg-dark" >04</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle3.png")}/>
                                        </div>
                                        <div>
                                            <h5>TESTING AND COMISSION</h5>
                                            <p className='width-p text-muted'>
                                            The system performs certain tests to ensure fault tolerance and smooth application flow
</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>

                    {/* card-5 */}


                    <div className='left-card mt-5 '>
                        <div className='card1 '>
                                <p className="bg-dark" >05</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle4.png")}/>
                                        </div>
                                        <div>
                                            <h5>LIVE-OPS  </h5>
                                            <p className='width-p text-muted'>
                                            After the services are moved to our platform, [x]cube LABS will take care of managing and maintaining the applications</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>



</div>
                    

</div>                
            


            </div>
        </div>
    </div>
  )
}

export default Home