//This is one approach (children component), but we can use of course the props alternative,one is not better that another, just personal preferences.
export default function TabButton({children, onSelect, isSelected}){
    

    return(
        <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
    )
}