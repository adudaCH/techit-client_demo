import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteProduct } from "../services/productServis";
import { successMsg } from "../services/toastify";


interface DeleteProductModalProps {
    show: boolean;
    onHide: Function;
    refresh: Function;
    productId: string;
}

const DeleteProductModal: FunctionComponent<DeleteProductModalProps> = ({
    show,
    onHide,
    refresh,
    productId,
}) => {
    return (
        <>
        <Modal
            show={show}
            onHide={() => onHide()}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Delete Prodduct
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            are you sure you want to delete dis product?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={()=>{
            deleteProduct(productId).then(()=>{
                onHide()
                refresh()
                successMsg("item was successfully deleted")
            }).catch((err)=>{
                console.log(err)
            })
            }}>Delete</Button>
            <Button variant="secondary" onClick={()=>{
                onHide()
            }}>Cancel</Button>
            </Modal.Footer>
        </Modal>
        </>
        );
};

export default DeleteProductModal;
