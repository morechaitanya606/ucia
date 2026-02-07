import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
    className?: string;
    showSubtitle?: boolean;
}

export const Logo = ({ className = '', showSubtitle = true }: LogoProps) => {
    return (
        <div className={`flex flex-col select-none ${className}`}>
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none text-foreground">
                UICA
            </span>
            {showSubtitle && (
                <span className="text-[0.6rem] md:text-[0.7rem] font-medium tracking-widest text-text-muted mt-0.5 uppercase">
                    United Innovation Care Association
                </span>
            )}
        </div>
    );
};

export const LogoSmall = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-2xl font-extrabold tracking-tight text-foreground">
            UICA
        </span>
    </div>
);
