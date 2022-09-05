interface DisplayProps {
  value: string
}

export default function Display({ value }: DisplayProps) {
  return (
    <input
      type="text"
      value={value}
      readOnly
      className='col-span-3 text-right font-mono text-5xl'
    />
  )
}