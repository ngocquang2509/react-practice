import styled from "styled-components";


const SearchBar = styled.input`
  position: fixed;
  left: 600px;
  top: 30px;
  border: 1px solid #555;
  border-radius: 50px;
  width: 450px;
  margin: 0 0 30px 100px;
  padding: 10px 0px 10px 40px;
  &:hover, &:focus , &:active {
    border-color: #e85f99;
    box-shadow: 0 0 0 3px hsla(335, 75%, 64%, .25)
  }
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
`;

export {SearchBar };
