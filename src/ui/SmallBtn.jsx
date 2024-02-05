import styled from "styled-components";


const SmallBtn = styled.button`
  border: none;
  border-radius: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

 font-size: 0.75rem;
    padding: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  color: rgb(254 242 242);
    background-color: rgb(127 29 29);

    &:hover {
      background-color: #b91c1c;
    }
`;

export default SmallBtn;
