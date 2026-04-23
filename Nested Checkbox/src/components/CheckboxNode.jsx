import { useState } from "react"

const CheckboxNode = ({ item, depth = 0 }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e, title) => {
        console.log(e.target.id, title);
        setIsChecked((prev) => !prev);
    }
    return (
        <div>
            <div style={{ paddingLeft: `${depth * 20}px`, paddingBlock: 2 }}>
                <input
                    type="checkbox"
                    onChange={(e) => handleOnChange(e, item.title)}
                    name={item.id}
                    id={item.id}
                    checked={isChecked}
                /> 
                <label htmlFor={item.id} className="pl-1">{item.title}</label>
            </div>
            {
                (item.children && item.children.length > 0) && (
                    item.children.map((child) => {
                        return <CheckboxNode key={child.id} item={child} depth={depth + 1} />
                    })
                )
            }
        </div>
    )
}

export default CheckboxNode