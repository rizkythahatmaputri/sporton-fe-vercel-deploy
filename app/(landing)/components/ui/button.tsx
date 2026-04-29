// contoh fitur typescript untuk mendefinisikan varian => TYPE
type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small"
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
// arti: extends (mengambil) dari type/interface bawaan button HTML, jadi kita bisa pakai semua props yang ada di button HTML (onClick, disabled, dll) tanpa harus mendefinisikan ulang di sini

const Button = ({children, className, variant = "primary", size="normal", ...props}: TButtonProps) => {
    // tempat untuk mendefinisikan
    const baseStyles = "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105"

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/85',
        dark: 'bg-dark text-white hover:bg-dark/85',
        ghost: 'bg-transparent text-dark hover:bg-gray-100',
    }

    const sizes = {
        normal: "py-4 px-9",
        small: "py-[10px] px-7"
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
       
    );
};

export default Button;
// kalau reusable elemen (button) menggunakan beberapa props