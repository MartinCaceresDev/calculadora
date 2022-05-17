import './Display.css';

function Display({ valorDisplay }){

  return(
    <div className='display'>
      <p>{valorDisplay}</p>
    </div>
  );
}

export default Display;