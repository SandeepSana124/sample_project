import React from 'react'

function Home() {
  return (
    <div className=' mb-5 mt-5'>
        <div className='row'>
            <div className='col-12 col-lg-6 d-flex justify-content-between'>
                 <div className="home-img">
                     <div className='resorce-heading'>
                        <div className='bg-resorce'>
                        <p className='p'>RESORCES</p>

                        </div>
                    <h1 className='resorce-name d-flex  flex-column justify-content-center'>
                        MAJOR <span className='savings'>SAVINGS</span>
                            DELIVERED FOR <span className='global'>GLOBAL</span>
                            <span className='Enterprises'>ENTERPRICES</span>

                    </h1>
                    </div> 


                 </div> 

<div className='row panini-card col-md-6'>
<div className="card">
                    <div className='panini-img mt-2'>
                        <img src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/resorces2.png")}></img>
                    </div>
                    <div className=' panini mt-3'>
                    <h6>PANINI AMERICA</h6>
                    <p className='text-muted'>SpotWorks reduced Panini's AWS expenses by 50% and dynamically managed instances for optimum efficiency</p>

                    </div>
                    <button className='mb-5 read-more-button'>Read More</button>


                 </div>


                 

</div>

<div className='row panini-card1 col-md-6'>
<div className="card ">
                    <div className='panini-img mt-2'>
                        <img src={require ("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/resorces3..png")}></img>
                    </div>
                    <div className=' panini mt-3'>
                    <h6>MANN+HUMMEL</h6>
                    <p className='text-muted'>
                    The global leader in smart filtration devices maximised cloud erformance while reducing costs by 40% with SpotWorks.                        </p>

                    </div>
                    <button className='mb-5 read-more-button'>Read More</button>


                 </div>
</div>  


            </div>

<div className='d-flex justify-content-center'>
    <link to="/resorces">
    <button className='mt-5 view-all-resorces-button'>View All</button>

    </link>

</div>

        </div>
        
    </div>

    
  )
}

export default Home