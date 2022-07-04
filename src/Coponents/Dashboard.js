import 'bootstrap/dist/css/bootstrap.min.css';
import './Bitmap.scss'

function Dashboard() {
    return (
        <div className='mt-5 mb-5'>
            <div className='row d-flex '>
                <div className='col-12 col-lg-3  cluster'>
                    <div className="clusterimg">
                        <img src={require("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/group.png")} alt="UFC logo" style={{width:"150px"}} />
                    </div>
                    <div >
                        <div className='clusterdiv1'>
                            <img src={require("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/text.png")} alt="UFC logo"  style={{marginRight:"8px",width:"35px"}}/>
                            <h4  style={{ color:"#eef2f7",fontSize: "18px",fontFamily:"BebasNeue"}}>DASHBOARD</h4>
                        </div>
                        <div className='clusterdiv12'>
                            <img src={require("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/groupdash.png")}  alt="UFC logo" style={{marginRight:"8px"}}/>
                            <h5 style={{marginLeft:"8px" , color: "#fff",fontFamily:"BebasNeue"}}>CLUSTER MANAGEMENT</h5>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 px-0 clusterdiv2">
                    <div id='clustNav'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" id="svgimg1">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>

                    <div className="clusterdiv22 mt-5">
                        <img src={require("/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/dash2.png")} alt="UFC logo"/>
                        <p id="clusterp">You don't have any Cluster at the moment.
                          Click on create cluster to Add Cluster</p>
                        <button  id="clusterbtn" style={{width:"20rem",fontWeight:"550" ,padding:"15px"}}>CREATE CLUSTER</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard

