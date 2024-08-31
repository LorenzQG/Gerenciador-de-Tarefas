import "./Modal.css";
export default function Modal({isOpen, setModalOpen, children}){
    if(isOpen){
        console.log('modal open')
        return(
            <div className='modal'>
                <div className='modal-content'>
                    <button className='btn-close' onClick={setModalOpen}>X</button>
                    {children}
                </div>
            </div>
        )
    }
  
}