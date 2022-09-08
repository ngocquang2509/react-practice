import styled from "styled-components";

const WrappItem = styled.div`
  margin: 30px;
  width: 250px;
  height: 320px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  opacity: 0.9;

  &:hover {opacity: 1.5;}
`;

const ItemName = styled.h3`
  margin: 5px 20px;
  font-size: 24px;
`;
const ItemCategory = styled.div`
  margin: 5px 20px;
  font-size: 20px;
  color: #767278;
`;
const ItemPrice = styled.div`
  margin: 5px 20px;
  font-size: 24px;
  color: #000000;
`;

const ItemImageWrapper = styled.div`
  height: 140px;
  width: auto;
  margin: 2px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  WrappItem,
  ItemName,
  ItemCategory,
  ItemPrice,
  ItemImageWrapper,
  ItemImg,
  Container,
};
