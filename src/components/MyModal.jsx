import React from 'react';

const MyModal = ({children, visible, setVisible}) => {

    const ContentClass = "p-6 bg-white rounded-2xl min-w-[250px] z-50"
    const ActiveClass = "fixed inset-0 bg-[#00030580] flex justify-center items-center z-50"
    const DisActiveClass = "fixed inset-0 hidden "


    return (
        <div className={visible ? ActiveClass : DisActiveClass} onClick={() => setVisible(false)}>
            <div className={ContentClass} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;