import styled from "styled-components";

const WrappItem = styled.div`
  margin: 30px;
  width: 250px;
  height: 320px;
  border: 1px solid #ccc;
  border-radius: 10px;
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
  height: 125px;
  width: 215px;
  border-raduis: 10px;
  margin: 20px;
`;
const ItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
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
