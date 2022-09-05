interface ButtonProps {
  description: string
  callback: () => void
  type: 'number' | 'symbol'
}

const numberStyle = 'bg-cyan-100 text-slate-600 hover:bg-cyan-200'
const symbolStyle = 'bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-500'

export default function Button({ description, type, callback }: ButtonProps) {
  return (
    <button
      className={`transition duration-100 p-5 border-0 text-2xl active:scale-95
        ${type === 'number' ? numberStyle : symbolStyle}
      `}
      onClick={callback}
    >
      {description}
    </button>
  )
}