
export const RangeSlider = (props: any) => {
  
  return (<div>
            <input className="range w-72 bg-gray-200 appearance-none cursor-pointer rounded-lg" type='range' value={props.value} min={props.min} max={props.max} onChange={props.onChange} />
          </div>
    )
  
}