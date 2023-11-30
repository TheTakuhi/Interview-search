import "./SearchResult.css"
import {useState} from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const SearchResult = ({ result }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //TODO style button
    return (
        <div className="search-result"  >
            <button style={{marginRight: "1rem", cursor: "pointer"}} onClick={() => setModalIsOpen(true)}>Detail</button>
            {result.id}. {result.name}
            <Modal
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                center
                classNames={{
                    modal: 'customModal',
                }}
            >

                <div style={{width: "80%"}}>
                    <h2>{result.name}</h2>
                    <p>Username: {result.username}</p>
                    <p>Email: {result.email}</p>
                    <p>Phone: {result.phone}</p>
                </div>
            </Modal>
        </div>
    );
};


export default SearchResult;