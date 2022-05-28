import styled from "styled-components";

const StyledHero = styled.div`
    margin: 5rem auto;
    padding: 1rem;
 
  
  hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
 left {
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  
  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1rem;
  }
  
  button {
    font-size: 1.3rem;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media Screen and (min-width: 768px) {
  }

  @media Screen and (min-width: 992px) {
      max-width: 1200px;
    

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    hero__left {
      flex-basis: 40%;
    }
  
    hero__right {
      flex-basis: 60%;
    }
  }
`;


export default StyledHero;