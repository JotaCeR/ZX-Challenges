import styled from "styled-components";

const StyledDeck = styled.div`
    width: 100%;
    height: 85%;
    border: dashed 1px pink;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: hidden;
    overflow-x: scroll;
`;

export default StyledDeck;