import Link from "next/link"

export interface LinkProps{
  title: string,
  link: string,
  handleClick: ()=>void
}
export const LinkMenu: React.FC<LinkProps> = (props) => {
  
  return (
    <div>
    <Link href={props.link} className='block bg-[#f8f3f39f] p-2.5	text-xs rounded-none	uppercase hover:bg-[#f8f3f3f8]' onClick={()=> props.handleClick()}>{props.title}</Link>
    </div>
  )
}

