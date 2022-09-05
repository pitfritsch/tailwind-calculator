import { useCallback, useState } from 'react'
import './App.css'
import Button from './Button'
import Display from './Display'

type Operations = 'division' | 'multiplication' | 'minus' | 'plus'

function App() {
  
  const [ result, setResult ] = useState<number>(0)
  const [ value, setValue ] = useState<string>('')
  const [ lastOperation, setLastOperation ] = useState<Operations>()
  // const [ values, setValues ] = useState<number[]>([])
  // const [ operations, setOperations ] = useState<Operations[]>([])

  const addValue = useCallback((value: string) => {
    setValue(os => os+value)
  }, [])

  const calculate = useCallback((operation: Operations) => {
    const numberedValue = Number(value)
    if (!lastOperation) {
      setResult(numberedValue)
      setLastOperation(operation)
      setValue('')
    } else {
      setResult((oldResult) => {
        let newResult = oldResult
        switch (lastOperation) {
          case 'plus':
            newResult += numberedValue
            break;
          case 'minus':
            newResult -= numberedValue
            break;
          case 'multiplication':
            newResult *= numberedValue
            break;
          case 'division':
            newResult /= numberedValue
            break;
          default:
            break;
        }
        return newResult
      })
      setLastOperation(operation)
      setValue('')
    }
  }, [lastOperation, value])

  const equal = useCallback(() => {
    const numberedValue = Number(value)
    setResult((oldResult) => {
      let newResult = oldResult
      switch (lastOperation) {
        case 'plus':
          newResult += numberedValue
          break;
        case 'minus':
          newResult -= numberedValue
          break;
        case 'multiplication':
          newResult *= numberedValue
          break;
        case 'division':
          newResult /= numberedValue
          break;
        default:
          break;
      }
      setValue(String(newResult))
      return 0
    })
    setLastOperation(undefined)
  }, [value, lastOperation])

  const clear = () => {
    setResult(0)
    setValue('')
    setLastOperation(undefined)
  }

  return (
    <div className="App">
      <div className='grid grid-cols-4 gap-4 p-5 bg-cyan-900 rounded-md'>
        <Display value={value || String(result)}/>
        <Button description='CE' callback={() => clear()} type='symbol' />

        <Button description='7' callback={() => addValue('7')} type='number' />
        <Button description='8' callback={() => addValue('8')} type='number' />
        <Button description='9' callback={() => addValue('9')} type='number' />

        <Button description='÷' callback={() => calculate('division')} type='symbol'/>

        <Button description='4' callback={() => addValue('4')} type='number' />
        <Button description='5' callback={() => addValue('5')} type='number' />
        <Button description='6' callback={() => addValue('6')} type='number' />

        <Button description='x' callback={() => calculate('multiplication')} type='symbol'/>
        
        <Button description='1' callback={() => addValue('1')} type='number' />
        <Button description='2' callback={() => addValue('2')} type='number' />
        <Button description='3' callback={() => addValue('3')} type='number' />

        <Button description='-' callback={() => calculate('minus')} type='symbol'/>

        <Button description='0' callback={() => addValue('0')} type='number' />

        <Button description='.' callback={() => addValue('.')} type='number'/>
        <Button description='=' callback={() => equal()} type='symbol'/>
        <Button description='+' callback={() => calculate('plus')} type='symbol'/>
      </div>
    </div>
  )
}

export default App
