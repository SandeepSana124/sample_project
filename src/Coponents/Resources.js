import React from 'react'


const Resources = () => {


// function a(){
//     alert("hello")
// }




  return (

        <div className='container'>

            <div className='p-4'>

                <div className='headingDiv d-flex' > <h1 className='display-2' >Resources</h1></div>

                {/* cards div */}
                <div className='cardsDiv m-5 ' >
                    <div className='row  '>
              



                                           
                        <div class="cardR card6 col-12 col-lg-4  "   style={{ width: "20" }}  >
                            <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/ResourcesImages/group-17.jpg')} alt='UFC Logo' className='' />
                        <div class="card card1 col-12 col-lg-4  "   style={{ width: "18" }}  >
                            <img src={require('/home/chandrikabogem/Desktop/GitProject/sample_project/src/Assests/ResourcesImages/group-17.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Panini America</h2>
                                <p className=''>SpotWorks reduced Panini's AWS expenses by 50% and dynamically managed instances for optimum efficiency </p>

                                <a  class="btn btn-primary">Read More</a>

                            </div>

                        </div>

                        <div class="cardR card2 col-12 col-lg-4  " style={{ width: "18" }}>
                            <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/ResourcesImages/group-9.jpg')} alt='UFC Logo' className='' />
                        <div class="card card2 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('/home/chandrikabogem/Desktop/GitProject/sample_project/src/Assests/ResourcesImages/group-9.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Mann+Hummel</h2>
                                <p>The global leader in smart filtration devices maximised cloud erformance while reducing costs by 40% with SpotWorks. </p>


                            </div>
                        </div>

                        <div class="cardR card3 col-12 col-lg-4  " style={{ width: "18" }}>
                            <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/ResourcesImages/group-10.jpg')} alt='UFC Logo' className='' />
                        <div class="card card3 col-12 col-lg-4  " style={{ width: "18" }}>
                            <img src={require('/home/chandrikabogem/Desktop/GitProject/sample_project/src/Assests/ResourcesImages/group-10.jpg')} alt='UFC Logo' className='' />

                            <div className='paniniCard' >
                                <h2>Nukkad Shops</h2>
                                <p>Nukkad Shops offers a one-stop solution for managing every aspect of retail business – billing, inventory management, customer engagement, purchase & sales management - to their clients. With feature-rich POS systems enabling traditional brick and mortar stores to transition to digital, they are a leading name in the retail digital transformation landscape </p>


                            </div>
                        </div>

                        <div class="cardR card4 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/ResourcesImages/group-43.jpg')} alt='UFC Logo' className='' />
                        <div class="card card4 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('/home/chandrikabogem/Desktop/GitProject/sample_project/src/Assests/ResourcesImages/group-43.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Panini America</h2>
                                <p>SpotWorks reduced Panini's AWS expenses by 50% and dynamically managed instances for optimum efficiency </p>


                            </div>
                        </div>

                        <div class="cardR  card5 col-12 col-lg-4  " style={{ width: "20" }}>
                            <img src={require('/home/sandeepsana/Desktop/Routing/sample_project/src/Assests/ResourcesImages/group-41.jpg')} alt='UFC Logo' className='' />
                        <div class="card card5 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('/home/chandrikabogem/Desktop/GitProject/sample_project/src/Assests/ResourcesImages/group-41.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Mann+Hummel</h2>
                                <p>The global leader in smart filtration devices maximised cloud erformance while reducing costs by 40% with SpotWorks.<br />


                                </p>


                            </div>
                        </div>



                    </div>
                </div>

                {/* cards div */}


            </div>


        </div>
    )
}

export default Resources

