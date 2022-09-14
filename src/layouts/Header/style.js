import styled from 'styled-components';

const Header = styled.div`
  position: fixed;
  left: 300px;
  top: 0;
  background: #fff;
  width: calc(100% - 300px);
  height: 100px;
`;

const BrandName = styled.div`
  font-size: 24px;
  float: left;
  color: #000;
  padding: 30px;
  text-decoration: none;
  text-transform: uppercase;
`;
const HeaderRight = styled.div`
  float: right;
  padding: 30px;
`;
const HeaderLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  &:hover {
    background: #ddd;
    border-radius: 5px;
  }
`;

export { Header, BrandName, HeaderRight, HeaderLink };
