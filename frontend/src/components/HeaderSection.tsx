interface HeaderSectionProps {
    imageSrc: string;
    altText: string;
    headerText: string;
}
const HeaderSection: React.FC<HeaderSectionProps> = ({ imageSrc, altText, headerText }) => {
    return (
        <h2 className="w-full flex text-xl font-Coiny text-blue-600 p-6 gap-12 text-left">
            <img
                className="w-8 h-8"
                src={imageSrc}
                alt={altText} />
            {headerText}
        </h2>
    );
};
export default HeaderSection;
