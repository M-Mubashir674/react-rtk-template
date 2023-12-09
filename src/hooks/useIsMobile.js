import { useState, useEffect } from 'react';

const useIsMobile = () => {
    // Set the initial value based on the window width
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set isMobile state based on window width
            setIsMobile(window.innerWidth < 768);
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isMobile;
}

export default useIsMobile;
