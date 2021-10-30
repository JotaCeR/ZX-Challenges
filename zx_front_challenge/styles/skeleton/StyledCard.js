import styled from 'styled-components';

const StyledCard = styled.div`
    height: 95%;
    min-width: 250px;
    border: solid 1px red;
    margin: 0px 2.5px 0px 2.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    h4 {
        border: solid 0.25px blue;
        margin-bottom: 25px;
    }

    button {
        margin-top: 20px;
    }
`;

export default StyledCard;