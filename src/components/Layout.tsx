import { FC, ReactNode } from 'react';
import LeftColumn from './LeftColumn'; 

interface LayoutProps {
    rightContent: ReactNode;
    title: string;        
    description: string;  
}

const Layout: FC<LayoutProps> = ({ rightContent, title, description }) => {
    return (
        <div className="flex h-screen bg-gray-50"> 
            {/* Columna Izquierda */}
            <div className="w-1/3 p-10 flex items-start justify-start">
                <LeftColumn title={title} description={description} />
            </div>
            
            {/* Columna Derecha */}
            <div className="w-2/3 p-10 bg-gray-100 flex items-center justify-center">
                {rightContent}
            </div>
        </div>
    );
};

export default Layout;
