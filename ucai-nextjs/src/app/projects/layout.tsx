'use client';

// Projects section has its own full-screen layout without the global navbar/footer
export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Remove background gradient for projects */}
            <style jsx global>{`
                .background-gradient {
                    display: none !important;
                }
            `}</style>
            {children}
        </>
    );
}
