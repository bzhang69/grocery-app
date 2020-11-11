import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./myStyle.css";
import Image from "react-bootstrap/Image";
import MyComponent from "./map-component";

class ItemDisplay extends Component {
	state = {};
	render() {
		const { showModal, onCloseItem, modalItem } = this.props;
		return (
			<Modal animation={false} show={showModal}>
				<Modal.Header closeButton onClick={onCloseItem}>
					<Modal.Title>{modalItem.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Image src={modalItem.url} alt="" fluid />
					<p>{modalItem.desc}</p>
					<MyComponent />
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" onClick={onCloseItem}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ItemDisplay;
