'use client';

import { useEffect } from 'react';

// Projects section has its own full-screen layout without the global navbar/footer
export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Hide global navbar and footer when projects page is mounted
    useEffect(() => {
        // Hide navbar and footer
        const navbar = document.querySelector('nav');
        const footer = document.querySelector('footer');
        const bgGradient = document.querySelector('.background-gradient');

        if (navbar) navbar.style.display = 'none';
        if (footer) footer.style.display = 'none';
        if (bgGradient) (bgGradient as HTMLElement).style.display = 'none';

        // Restore on unmount
        return () => {
            if (navbar) navbar.style.display = '';
            if (footer) footer.style.display = '';
            if (bgGradient) (bgGradient as HTMLElement).style.display = '';
        };
    }, []);

    return <>{children}</>;
}
