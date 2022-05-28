import styled from "styled-components";

const StyledNavbar = styled.div`

  container {
    background-color: #4361ee;
    padding: 1rem;
    color: #fff;
  }
  
  nav {
    display: flex;
    flex-direction: column;
  }
  
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  li {
    margin-bottom: 1rem;
  }
  
  Link {
    text-decoration: none;
    color: #fff;
  }
  
  @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    brand {
      margin-bottom: 0;
    }
  
    list {
      flex-direction: row;
    }
  
    item {
      margin: 0 1rem;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }



`;


export default StyledNavbar;