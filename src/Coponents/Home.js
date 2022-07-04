import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const resorces=()=>{
        navigate("/resorces")
    }

    const panini=()=>{
        navigate("/panini")
    }
    const mannhumel=()=>{
        navigate("/mannhumel")

    }
    const chooseprovider=()=>{
        navigate("/choose")
    
      }



  return (
    
<>
<div className='section1'>
        <div className='h-tag001 text-white '>
        <h1>Reduce Your AWS Bills by up to <span style={{color:'#ffcd46'}}className='span001 '>80% While</span><br></br> Gaining the Most Out of Your Cloud!</h1>
      </div>
       <div className='p-tag'>
      <p>SpotWorks enables you to run Spot instances without needing to worry about AWS taking them <br></br>
      away with a 2 minute notice. Our predictive algorithms and failover tech ensures that your service <br></br>
      migrates gracefully with no impact on end-users. And we do this by saving you an insane amount!</p>
      </div> 
      <div className='start-demo'>
        <span style={{padding:'9px 55px 7px 56px'}}className="border border-light" onClick={chooseprovider}>START A DEMO</span>
      </div>

        </div>
    
    <div className='combine'>

       

    
    <div className=' mb-5 mt-5'>
        <div className=''>
            <div className='col-12 col-lg-9 d-flex p-4 m-4'>
                 <div className="home-img col-lg-4 col-md-6">
                     <div className='resorce-heading'>
                        <div className='bg-resorce'>
                        <p className='p'>RESORCES</p>

                        </div>
                    <h1 className='resorce-name d-flex flex-column'>
                        MAJOR<span className='savings'>SAVINGS</span>
                            DELIVERED FOR <span className='global'>GLOBAL</span>
                            <span className='Enterprises'>ENTERPRICES</span>

                    </h1>
                    </div> 


                 </div> 

                 <div className=' panini-cards'>
<div className="sec-card1 ml-3">
                    <div className='panini-img mt-2'>
                        <img src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/resorces2.png")}></img>
                    </div>
                    <div className='panini mt-3'>
                    <h6>PANINI AMERICA</h6>
                    <p className='text-muted'>
                    SpotWorks reduced Panini's AWS expenses by 50% and dynamically managed instances for optimum efficiency                                </p>

                    </div>
                    <div className='read-more-btn-sec'>
                    <button className='mb-5 read-more-button' onClick={panini}>Read More</button>

                    </div>


                 </div>
</div> 




 <div className=' panini-cardss'>
<div className="sec-card2 ml-3">
                    <div className='panini-img mt-2'>
                        <img src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/resorces3..png")}></img>
                    </div>
                    <div className='panini mt-3'>
                    <h6>MANN+HUMMEL</h6>
                    <p className='text-muted'>
                    The global leader in smart filtration devices maximised cloud erformance while reducing costs by 40% with SpotWorks.                        </p>

                    </div>
                    <div className='read-more-btn-sec'>
                    <button className='mb-5 read-more-button'onClick={mannhumel}>Read More</button>

                    </div>


                 </div>
</div>   


            </div>
            </div>

<div className='d-flex flex-row justify-content-center'>
    <button className='mt-5 view-all-resorces-button' onClick={resorces}>View All</button>



</div>

        </div>
        
    </div>


{/* section 2 */}
    <div className=' mt-3 bg-color'>
        <div className='row -3'>
            <div className='col-12 col-lg-6 col-md-4 d-flex '>
                <div className='img mt-3 '>
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
                <div className='mt-5 p-3 '>
<div className=''>

  {/* card 1 */}

<div className='left-card  mt-5' >
                        <div className='card1 '>
                                <p className="bg-dark" >01</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle.png")}/>
                                        </div>
                                        <div className='card-content'>
                                            <h5>ANALYSIS</h5>
                                            <p className=' width-p text-muted'>To begin with, We study your existing architecture in detail and identify services and components that can be transformed
</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>

{/* card 2 */}
                    <div className='right-card mt-5'>
                        <div className='card1 '>
                                <p className="bg-dark" >02</p>

                            </div>

                            <div className='container '>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle1.png")}/>
                                        </div>
                                        <div className='card-content'>
                                            <h5>ADAPTATION</h5>
                                            <p className='width-p  text-muted'>
                                            This is where we determine the required changes in your existing processes, such as adding fault tolerance capabilities and workload transformation
</p>
                                        </div>


                                    </div>

                                </div>

                            </div>
                    </div>

                    {/* card 3 */}

                    <div className='left-card mt-5 '>
                        <div className='card1'>
                                <p className="bg-dark" >03</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle2.png")}/>
                                        </div>
                                        <div className='card-content'>
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


<div className='right-card mt-5 '>
                        <div className='card1 '>
                                <p className="bg-dark" >04</p>

                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-lg-5 d-flex'>
                                        <div>
                                            <img className='card-image' alt='rectangle1 img' src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/rectangle3.png")}/>
                                        </div>
                                        <div className='card-content'>
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
                                        <div className='card-content'>
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







</>













    

    
  )
}

export default Home