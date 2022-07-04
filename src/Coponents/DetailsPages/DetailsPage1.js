import React from 'react'
import { useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

function DetailsPage1() {
    const navigate = useNavigate()

    const gotohome=()=>{
        navigate("/")
    }
    return (
        <div className='container pb-5'>
            

            <div className='panini-section'>
            <div className='card-part'>
                <div className='d-flex flex-row pt-4 pb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <p className='para' onClick={gotohome}>BACK</p>
                </div>
                <div>
                <h1 className='pb-4'>MANN-HUMMEL</h1>
                <div>
                    <div className='panini-card ml-0'>
                    <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/group-42.png')} alt='UFC Logo' className='panini-image'/>
                    
                    </div>
                </div>
            </div>
            </div>
            <div className='des-section pt-5 pb-5'>
                <h5>MANN-HUMMEL TRADING CARDS(DTC)</h5>
                <p className='des-p'>
                    DTC is a gamified social platform for Panini to release its licensed content, supported by several gamified modules for the customers to interact and trade the content within the apps.
                </p>

                <div className='pb-3'>
                    <h5>PLATFORM ARCHITECTURE</h5>
                    <p className='des-p'>The platform has several instance types that vary in compute power. This includes m3, m4, m5, r4, and t2 types and the services are fully containerized and use NoSQL databases.</p>
                </div>

                <div className='pb-3'>
                    <h5>THE CHALLENGES</h5>
                    <p className='des-p'>As it is a gamified trading platform, DTC had to deal with dynamic workloads all the time with higher traffic during evenings, normal traffic during other times of the day, and lesser traffic during nights. Due to these varying traffic patterns, the cloud-spend by Panini was not optimized. Running the platform on Reserved Instances did not seem feasible to Panini. Using Spot instances, as per them was too risky due to AWS's ability to reclaim Spot with just a 2-minute advance notice.</p>
                    <p>The solution Panini identified was to run on-demand instances, although they were expensive.</p>
                </div>

                <div className='pb-3'>
                    <h5>SPOTWORKS COST OPTIMIZATION SOLUTION</h5>
                    <p className='des-p'>Panini already had a success story for its E-commerce platform with SpotWorks. With this experience, they approached SpotWorks to know the possibilities of optimizing the cloud expenses for DTC. After SpotWorks provided a POC to Panini that demonstrated how a continuous cloud cost optimization model could benefit them, they decided to move their platform on to SpotWorks. They were hugely impressed with a couple of features in particular:
                        <br/>1.The solution's ability to manage spot instances without needing manual intervention.
                        <br/>2.The solution's ability to automatically resize the platform based on load.
                    </p>
                </div>

                <div >
                    <h5>RESULTS AND BENEFITS</h5>
                    <p className='des-p'>Apart from the others, a couple of benefits of adopting to SpotWorks cloud cost optimization solutions include:
                        <br/>1. About 50% Cost Optimization for EC2 Workloads with SLA for High Availability.
                        <br/>2. ROI - Panini was able to achieve cost efficiency with minimal effort and time.
                        3. With the visibility provided by SpotWorks, Panini was able to understand their cloud spend during peak hours
                    </p>
                </div>

            </div>
            
            </div>

            
        </div>
    )
}

export default DetailsPage1

