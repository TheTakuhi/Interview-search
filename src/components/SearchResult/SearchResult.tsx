import "./SearchResult.css"
import {useState} from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const SearchResult = ({ result }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="search-result" onClick={() => setModalIsOpen(true)}>
            {result.name}
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
                    <p>Info: {result.info}</p>
                    <p>Age: {result.name}</p>
                </div>
            </Modal>
        </div>
    );
};


export default SearchResult;