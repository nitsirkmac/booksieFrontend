import styled from 'styled-components'



// colors
export const colors = {
    dark: 'black',
    main: 'black',
    middle: 'black',
    light: 'black'
};

// images
export const images = {
    bg: 'https://imgur.com/gallery/89GJzS9',
}

export const Card = styled.div`
box-shadow: 0 2px 5px;
border: 1px solid black;
font-weight: 600;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 270px;
    color: ${colors.middle};
    padding: 5px;
    margin: 10px;
`;

export const Image = styled.img`
    height: 150px;
    width: 115px;
`;

export const ListView = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    gap: 10px;
    
`;

export const TextArea = styled.input`
    width: 300px;
    box-shadow: 0 2px 5px;
  border-radius: 5px;
  border: none;
`

export const Info = styled.textarea`
    height: 100px;
    width: 300px;
    box-shadow: 0 2px 5px;
  border-radius: 5px;
  border: none;
`;



export const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    color: ${colors.main};
    
`;

export const Quote = styled.h1`
    color: ${colors.middle};
    font-family: 'Courier New', Courier, monospace;
    margin: 100px 100px 100px 100px;
    `

