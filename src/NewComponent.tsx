type NewComponentType ={
  currentMoney:Array<MoneyType>
  onClickFilterHandler:(nameButton: string)=>void
}
type MoneyType ={
  banknote: string
   nominal: number
    number: string
}


export const NewComponent=(props:NewComponentType)=>{
  return(
    <div>
      <div>
      <ul>
        {props.currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: '35px' }}>
        <button onClick={() => props.onClickFilterHandler('all')}>all</button>
        <button onClick={() => props.onClickFilterHandler('ruble')}>rubles</button>
        <button onClick={() =>props. onClickFilterHandler('dollar')}>dollars</button>
      </div>
    </div>
    </div>
  )
}




















/* type NewComponentType={
  currentMoney: Array<MoneyType>
  onClickFilterHandler:(nameButton:string)=>void
  //money: Array<>
}

type MoneyType={
  banknote: string
   nominal: number
   number: string
}

export const NewComponent=(props:NewComponentType)=>{
  return(
    <div>
      <div>
      <ul>
        {props.currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: '35px' }}>
        <button onClick={() => props.onClickFilterHandler('all')}>all</button>
        <button onClick={() => props.onClickFilterHandler('ruble')}>rubles</button>
        <button onClick={() => props.onClickFilterHandler('dollar')}>dollars</button>
      </div>
    </div>
    </div>
  )
}
 */

