"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<{
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
}>({
    isSidebarOpen: false,
    toggleSidebar: () => { },
    closeSidebar: () => { },
});

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <SidebarContext.Provider
            value={{
                isSidebarOpen,
                toggleSidebar,
                closeSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);
