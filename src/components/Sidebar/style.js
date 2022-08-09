import styled from "styled-components";

const LeftSideBar = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(205.17deg, #418cd1 10.93%, #9c41d1 116.08%);
`;
const BrandName = styled.p`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 30px;
  padding: 15px 25px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #fff;
`;

const MenuItemText = styled.a`
  padding-left: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export { LeftSideBar, BrandName, MenuList, MenuItem, MenuItemText };
