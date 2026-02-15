import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="bg-accent/90 hover:bg-accent/100 disabled:bg-accent/40 text-secondary w-full cursor-pointer rounded-xl px-6 py-3 font-semibold text-base shadow-lg transition-all duration-300 focus:ring-2 focus:ring-accent/60">
      {text}
    </button>
  )
}

export default Button
