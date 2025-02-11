import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SkeletonLoading.css'
import '../forecast.css'

const SkeletonLoading = () => {
  return (
    <>
    <div className="time-details">
         <Skeleton 
            className='time-details-loading'
         />
         <Skeleton 
            
            className='time-details-loading'
         />
    </div>
    <div className="result">
        <div className="condition-container"> 
            <Skeleton
                
                className='condition-container-loading'
            />
        </div>        
        <div className="location-details">
            <Skeleton 
                
                className='location-details-loading'
            />
            <Skeleton 
                
                className='location-details-loading'
            />
            <Skeleton 
                
                className='location-details-loading'
            />
        </div>
    </div>  
    <div className="forecast">
     <div  className="forecast-cards">
        <Skeleton className="forecast-cards-loading" />
    </div>
     <div  className="forecast-cards">
        <Skeleton className="forecast-cards-loading" />
    </div>
     <div  className="forecast-cards">
        <Skeleton className="forecast-cards-loading" />
    </div>
     <div  className="forecast-cards">
        <Skeleton className="forecast-cards-loading" />
    </div>
     <div  className="forecast-cards">
        <Skeleton className="forecast-cards-loading" />
    </div>
  </div>
  </>
  )
}

export default SkeletonLoading