
import 'bootstrap/dist/css/bootstrap.min.css';
import './bitmap.scss'


function Spot() {
    return (


        <div className='spotdiv'>

            <div className=" card text-center" style={{ width: "50rem",height:"50rem",paddingTop:"20px" }}>
                <div>
                    <div>
                        <img src={require('/home/prashanthdadi/Desktop/project12/sample_project/src/imgefolder/logo-copy.jpg')} alt='UFC Logo' className='panini-image'  style={{paddingTop:"20px",paddingBottom:"10px"}}/>
                        <h1  style={{paddingTop:"10px",paddingBottom:"10px",fontFamily: "monospace"}}>WELCOME</h1>
                    </div>

                    <div className="deardiv">
                        <div  id="thankdiv">
                        <p style={{paddingTop:"10px",paddingBottom:"10px"}} >Dear Jhon,</p>
                        <p>Thank you for registering to SpotWorks</p>
                        <p>BEfore we get started, please help us verify your email address</p>
                        <p style={{color:"blue"}}>Jhon.Doe@gmail.com</p>
                        <p>This  lets you access all SpotWork services</p>
                        </div>
                        <div className="buttonDiv">
                            <button className="btn btn-primary verifymail" >VERIFY EMAIL ADDRESS</button>

                        </div>
                        <div className='recivingdiv'>
                            <p>
                            Your're reciving this email beacuse you  recently created a new SpotWork</p><br/>
                            <span>If this wasn't you,please ignore this email </span></div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Spot