import PropTypes from 'prop-types'
import State from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({ type,title,customStyles,handleClick }) => {
    const snap = useSnapshot(State);
  
    const generateStyle = (type) => {
    if(type=='filled'){
        return{
            backgroundColor: snap.color,
            color: '#FFF'
        }
    }
  }
  
    return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}    
    > 
        {title}
    </button>   
  )
}
CustomButton.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    customStyles: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default CustomButton