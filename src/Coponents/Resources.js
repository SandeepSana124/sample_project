import React from 'react'

const Resources = () => {


// function a(){
//     alert("hello")
// }




  return (
        <div className='continer'>

            <div className='container Inside'>

                <div className='headingDiv ' > <h1 className='display-2' >Resources</h1></div>

                {/* cards div */}
                <div className='cardsDiv  container' >
                    <div className='row '>
              



                                           
                        <div class="card card1 col-12 col-lg-4  "   style={{ width: "18" }}  >
                            <img src={require('file:///home/abdulbari/Desktop/Abdul/my-app/src/Images/panini/group-17.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Panini America</h2>
                                <p>SpotWorks reduced Panini's AWS expenses by 50% and dynamically managed instances for optimum efficiency </p>

                                <a href="#" class="btn btn-primary">Read More</a>

                            </div>

                        </div>

                        <div class="card card2 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('file:///home/abdulbari/Desktop/Abdul/my-app/src/Images/group-9.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Mann+Hummel</h2>
                                <p>The global leader in smart filtration devices maximised cloud erformance while reducing costs by 40% with SpotWorks. </p>


                            </div>
                        </div>

                        <div class="card card3 col-12 col-lg-4  " style={{ width: "18" }}>
                            <img src={require('file:///home/abdulbari/Desktop/Abdul/my-app/src/Images/group-10.jpg')} alt='UFC Logo' className='' />

                            <div className='paniniCard' >
                                <h2>Nukkad Shops</h2>
                                <p>Nukkad Shops offers a one-stop solution for managing every aspect of retail business – billing, inventory management, customer engagement, purchase & sales management - to their clients. With feature-rich POS systems enabling traditional brick and mortar stores to transition to digital, they are a leading name in the retail digital transformation landscape </p>


                            </div>
                        </div>

                        <div class="card card4 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('file:///home/abdulbari/Desktop/Abdul/my-app/src/Images/group-43.jpg')} alt='UFC Logo' className='' />
                            <div className='paniniCard' >
                                <h2>Panini America</h2>
                                <p>SpotWorks reduced Panini's AWS expenses by 50% and dynamically managed instances for optimum efficiency </p>


                            </div>
                        </div>

                        <div class="card card5 col-12 col-lg-4 " style={{ width: "18" }}>
                            <img src={require('file:///home/abdulbari/Desktop/Abdul/my-app/src/Images/group-41.jpg')} alt='UFC Logo' className='' />
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

