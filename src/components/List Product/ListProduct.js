import React from "react";
import Item from "../Item/Item";
import { ListProductTitle, ListProductWrap, ListProductItem } from "./style";
import Button from "../Button/Button";
//import ItemService from "../../api/ItemService";
import Popup from "../Popup/Popup";
import { useModal } from "../../store/hooks";

function ListProduct() {
  const {isShow, toggle} = useModal();
  return (

      <ListProductWrap>
        <ListProductTitle>List Product</ListProductTitle>
        <Button
          label="Create"
          backgroundColor="#418CD1"
          img="/icons/add.svg"
          handleClick={toggle}
        />
        <Popup isShow={isShow} hide={toggle} />
        <ListProductItem>
          <Item />
        </ListProductItem>
      </ListProductWrap>
  );
}

// class ListProduct extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openModal: false,
//       items: [],
//     };
//   }

//   addItem = () => {
//     this.props.history.push(`/add-item`);
//   };

//   viewItem = (id) => {
//     this.props.history.push(`/view-item/${id}`);
//   };

//   editItem = (id) => {
//     this.props.history.push(`/edit-item/${id}`);
//   };

//   deleteItem = (id) => {
//     ItemService.deleteItem(id).then((res) => {
//       this.setState({
//         items: this.state.items.filter((item) => item.id !== id),
//       });
//     });
//   };

//   componentDidMount() {
//     ItemService.getItem().then((res) => {
//       this.setState({ items: res.data });
//     });
//   }

//   render() {
//     return (
//       <ListProductWrap>
//         <ListProductTitle>List Product</ListProductTitle>
//         <Button
//           label="Create"
//           backgroundColor="#418CD1"
//           img="/icons/add.svg"
//           handleClick={() => this.setState({ openModal: true })}
//         />
//         {this.openModal && <Popup/>}
//         <ListProductItem>
//           <Item />
//         </ListProductItem>
//       </ListProductWrap>
//     );
//   }
// }

export default ListProduct;
