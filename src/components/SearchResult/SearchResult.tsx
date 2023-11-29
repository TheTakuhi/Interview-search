import "./SearchResult.css"
import {useState} from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const SearchResult = ({ result }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="search-result" onClick={() => setModalIsOpen(true)}>
            {result.id}. {result.name}
            <Modal
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                center
                classNames={{
                    modal: 'customModal',
                }}
            >
                <h2>{result.name}</h2>
                <div>
                    <p>Username: {result.username}</p>
                    <p>Email: {result.email}</p>
                    <p>Phone: {result.phone}</p>
                </div>
            </Modal>
        </div>
    );
};


export default SearchResult;