export default function Entry(props){
 return (
  <div className='entry'>
    <div className='entry-image'>
      <img src={props.detail.imageUrl} alt=""/>
    </div>
    <div className='entry-text'>
      <div className='location-data'>
        <h3>{props.detail.location}</h3>
        <a href=''>View GoogleMaps here</a>
      </div>
      <h1>{props.detail.title}</h1>
      <h3>{props.detail.startDate} - {props.detail.endDate}</h3>
      <p>{props.detail.description}</p>
    </div>
  </div>
 )
}