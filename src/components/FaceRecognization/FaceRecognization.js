import React from 'react';
import './FaceRecognization.css'


const FaceRecognization = ({imageUrl, box}) =>{
    return(
        <div className='center ma' >
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                
                {/* {box.map(element => (
                <div key={element.topRow} className="bounding-box" style={{ top: element.topRow, right: element.rightCol, bottom: element.bottomRow, left: element.leftCol }}>
                </div>))
            } */}


                {box.map(element =>(
                    <div 
                        key ={element.topRow}
                        className='bounding-box' 
                        style={{
                            left: element.leftCol, 
                            top: element.topRow, 
                            right: element.rightCol, 
                            bottom: element.bottomRow}}>

                    </div>
                ))
                }
                {/* <div 
                    className='bounding-box' 
                    style={{
                        left: box.leftCol, 
                        top: box.topRow, 
                        right: box.rightCol, 
                        bottom: box.bottomRow}}>

                </div> */}
                
            </div>
           
        </div>
    )
    
}

export default FaceRecognization























// import React from 'react';
// import './FaceRecognization.css'


// const FaceRecognization = ({imageUrl, box}) =>{
//     return(
//         <div className='center ma' >
//             <div className='absolute mt2'>
//                 <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
//                 <div className='bounding-box' style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>
//             </div>
           
//         </div>
//     )
    
// }

// export default FaceRecognization