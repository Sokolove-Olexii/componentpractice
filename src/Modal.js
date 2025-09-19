import { Component } from "react";
import "./App.css";

class Modal extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleKey = (e) => {
    if (e.key === "Escape") {
      this.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.isOpen !== this.state.isOpen) {
      console.log(
        "Modal state changed:",
        this.state.isOpen ? "OPEN" : "CLOSED"
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Modal Open</button>
        {this.state.isOpen && (
          <div className="modal-overlay">
            <div className="modal-window">
              <h1>Modal</h1>
              <p>Text</p>
              <button onClick={this.closeModal} className="close-btn">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
