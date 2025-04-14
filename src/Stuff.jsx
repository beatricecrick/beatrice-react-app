// import PropTypes from 'prop-types';

function Stuff({name= "Employee Man", title= "Worker"}){
    return(
        <b>    
            <div className="myCard">
                <img src="https://placehold.co/150x150" className="cardPic"></img>
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </b>
    );
}

export default Stuff