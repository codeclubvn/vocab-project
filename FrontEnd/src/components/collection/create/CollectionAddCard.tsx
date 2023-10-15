interface Props extends React.ComponentPropsWithoutRef<'div'> {}

function CollectionAddCard({}: Props) {
  return (
    <div className='group cursor-pointer flex py-10 items-center rounded-md bg-[#f2f2f2]'>
      <div className='flex items-center justify-center w-full'>
        <span className='relative group-hover:text-[#ffcd1f] transition uppercase whitespace-nowrap font-bold'>
          + THÊM THẺ
          <div className='transition absolute w-full h-1 mt-2 group-hover:bg-[#ffcd1f] bg-[#23a8f2] ' />
        </span>
      </div>
    </div>
  )
}

export default CollectionAddCard
