import {FC, useState} from "react";
import Modal from "react-responsive-modal";

import 'react-responsive-modal/styles.css';
import "./SearchResult.css"
import {User} from "../../models/User.ts";

interface SearchResultProps {
    result: User;
}

const SearchResult: FC<SearchResultProps> = ({ result }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="search-result"  >
            <button className="detail-button" onClick={() => setModalIsOpen(true)}>Detail</button>
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
