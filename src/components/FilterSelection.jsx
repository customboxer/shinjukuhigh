export default function FilterSelection(props){
  return(
      <div className="rounded-full border-2 border-black bg-primary-blue h-[24px] flex">
        <div className="flex items-center pl-[12px] pr-[12px] pt-[4px] pb-[4px] justify-between gap-[4px]">
          <span className="text-sm text-white">{props.filter}</span>
          <button onClick={() => { props.onDelete();  } }>
            <img src={"images/x_icon.svg"} alt="x_icon" className="w-[8px] h-[8px]"/>
          </button>
        </div>
      </div>
  )
}
