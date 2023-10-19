import image from '../pics/building_1.webp'
import person from "../pics/person_1.webp"
const Build = (props)=>{
    return (
        <div className="box">
          <img src={props.mainP} alt="building"/>
          <div className="miniBox">
            <h3 >{props.tittle}</h3>
            <p>{props.subH}</p>
            <span>{props.desc}</span>
            <figure>
              <img src={props.miniP} alt="" width={200} />
              <div className='figBox'>
                <p className="heading">{props.miniH}</p>
                <span>{props.time}</span>
              </div>
            </figure>
          </div>
        </div>
    )
}
export default Build;