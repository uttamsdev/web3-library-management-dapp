
import PropTypes from 'prop-types';
import styled,{keyframes} from 'styled-components';

const slideIn = keyframes`
  0%{
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
  }
  100%{
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;


const Container = styled.div`
 animation: ${slideIn} 0.8s cubic-bezier(0.39,0.575,0.565,1) both;
 display:grid;
 grid-template-columns: 38% 20% 5% 37%;
 padding: 2rem 0.188rem 1.625rem 1.688rem;
 border:solid 1px;
 border-radius: 4px;
 line-height:normal,
 transition:background 0.40s linear;
 margin-right:1rem;
 width:250px;
 display:inline-block
`;

const Book = ({
    id,name,year,author,finished,clickBookFinished
}) =>{
    return (
        <Container>
            <div>
                <p>{name}</p>
                <p>{author}</p>
                <p>{year}</p>
                <span>
                    {
                        finished === "false" ? (
                            <button className='font-bold px-10 py-2 bg-[#FF7F7F] text-[#FFFFFF] rounded-lg mt-5 hover:scale-105 transition duration-500 ease-in-out' onClick={()=>clickBookFinished(id)}>Finish Book</button>
                        ) : <p className='font-bold text-[#50d71e]'>Book Finished</p>
                    }
                </span>
            </div>
        </Container>
    );
}


Book.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    year:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    finished:PropTypes.string.isRequired,
};



export default Book;