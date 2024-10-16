import { FC} from 'react';
import LeftColumn from './LeftColumn'; 
import RightColumn from './RightColumn';

interface LayoutProps {
    title: string;        
    description: string;
    stepTitle: string;
    stepDescription: string;
    onBackClick: () => void;
    onNextClick: () => void;
}

const Layout: FC<LayoutProps> = ({ title, description, stepTitle, stepDescription, onBackClick, onNextClick  }) => {
    return (
        <div className="flex h-screen bg-white">
            {/* Columna Izquierda */}
                
                 <LeftColumn title={title} description={description} />
                 

            {/* Columna Derecha */}
                
                <RightColumn
                    stepTitle={stepTitle}
                    stepDescription={stepDescription}
                    onBackClick={onBackClick}
                    onNextClick={onNextClick}
                    />
                </div>
    );
};

export default Layout;
