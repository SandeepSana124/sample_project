import React from 'react'
import { useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

function DetailsPage() {
    const navigate = useNavigate()

    const gotohome=()=>{
        navigate("/")
    }
    return (
        <div className='container pb-5'>
            {/* <div className='navbar-section navclass'>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div className='d-flex flex-column'>
                        <a class="navbar-brand names" href="#">SpotWorks</a>
                        <p className='spanEle names'>Powered By [X]cube LABS</p>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ullist navitems-center">    
                                <li class="nav-item">
                                    <a class="nav-link active names " aria-current="page" href="#">SOLUTIONS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link names" href="#">RESOURCES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link names" href="#" id="navbarDropdown" role="button" aria-expanded="false">
                                        OUR APPROACH
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  names" href="#" tabindex="-1" aria-disabled="true">ABOUT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  names" href="#" tabindex="-1" aria-disabled="true">PRICING</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link names" href="#" tabindex="-1" aria-disabled="true">SUPPORT</a>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <a class="nav-link names" href="#" tabindex="-1" aria-disabled="true">LOGIN</a>
                                <button class="button" type="submit">START DEMO</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div> */}

            <div className='panini-section'>
            <div className='card-part'>
                <div className='d-flex flex-row pt-4 pb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <p className='para' onClick={gotohome}>BACK</p>
                </div>
                <div>
                <h1 className='pb-4'>PANINI AMERICA</h1>
                <div>
                    <div className='panini-card ml-0'>
                    <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/photo-copy.png')} alt='UFC Logo' className='panini-image'/>
                    
                    </div>
                </div>
            </div>
            </div>
            <div className='des-section pt-5 pb-5'>
                <h5>PANINI DIGITAL TRADING CARDS(DTC)</h5>
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

             {/* <div className='bottom-section'>
            <div className='spothead'>
                
                <img src={require('file:///home/ramyasingam/.cache/.fr-V41API/group.png')} alt='UFC Logo'/>
                <div className='contact-sec'>   
                <p>Contact Us</p>
                <p>040-9123456</p>   
                <p>spotwork@xcubelabs.com</p> 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook bticons" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter bticons" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram bticons" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin bticons" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            
            </div> 

             </div> */}
            

        </div>
    )
}

export default DetailsPage

