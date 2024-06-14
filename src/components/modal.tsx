import { ReactNode } from 'react';

export const Modal = ({
    isVisible,
    onClose,
    children,
    header,
}: {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    header: string;
}) => {
    if (!isVisible) return null;

    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') onClose();
    };

    return (
        <div
            onClick={handleClose}
            onTouchEnd={handleClose}
            id="wrapper"
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        >
            <div className="w-7/12">
                <div className="bg-white p-8 rounded-xl text-black flex flex-col">
                    <h1 className="text-2xl pb-8 text-gray-300">{header}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};
