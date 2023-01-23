import styled from 'styled-components'

// colors
export const colors = {
    dark: 'black',
    main: 'red',
    middle: '#6E0A1E',
    light: 'goldenrod'
};

// images
export const images = {
    bg: 'https://imgur.com/gallery/89GJzS9',
}

export const Card = styled.div`
    border: 2px solid ${colors.light};
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

export const Image = styled.div`
    height: 150px;
    width: 115px;
`;

export const ListView = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
`;

export const TextArea = styled.input`
    width: 300px;
`

export const Info = styled.input`
    height: 100px;
    width: 300px;
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

