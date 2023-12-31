import React, { useState } from 'react';
import { Button } from './ui/button';

interface SidebarProps {
  setActivePane: (pane: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActivePane }) => {
    const [activeButton, setActiveButton] = useState<string | null>('suits');

    const buttons = [
        { id: 'suits', name: 'NASA Johnson Space Center' },
        { id: 'cs', name: 'UCI CubeSat' },
        { id: 'tc', name: 'Team Cartographer' },
        { id: 'uci-ss', name: 'UCI School of Social Sciences' },
    ]
    
    return (
        <div className="flex flex-col w-80">
            {buttons.map(button => (
                <Button
                key={button.id}
                className={`rounded-sm hover:bg-[#4700fe]/10 bg-transparent text-wrap h-[30] ${activeButton === button.id ? 'border-r-4 border-r-[#4700fe] text-[#00e9fe] bg-[#4700fe]/30 hover:bg-[#4700fe]/20' : 'rounded-none border-r-4 border-r-gray-900'}`}
                onClick={() => { setActivePane(button.id); setActiveButton(button.id) }}
                >
                    {button.name}
                </Button>
            ))}
            <EmptyBorderedButton />
            <EmptyBorderedButton />
        </div>
    );
    };

export default Sidebar;


const EmptyBorderedButton = () => {
    return (
        <Button className="bg-transparent hover:cursor-default hover:bg-transparent rounded-none border-r-4 border-r-gray-900"></Button>
    )
}