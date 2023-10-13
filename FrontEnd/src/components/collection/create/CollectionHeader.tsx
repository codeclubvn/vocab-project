import { InputCreateCollection } from "../../common/Input"
import { ButtonCreateCollection, ButtonImportCollection } from "../../common/Button"
import Image from "next/image"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  className?: string,
}

function CollectionHeader({
  className
}: Props) {
  return (
    <div className={`${className} collection-header`} >
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-8">Tạo học phần mới</h1>
        <ButtonCreateCollection
          description="Tạo"
          className="self-start bg-blue-500 hover:bg-blue-600 text-white justify-items-end"
        />
      </div>
      <div className="max-w-[600px]">
        <InputCreateCollection
          id="title"
          className=''
          classNameLabel='text-sm'
          title='Tiêu đề'
          placeholder='Nhập tiêu đề, Ví dụ "Sinh hoc - Chương 22: Tiến hóa'
          type='text'
        />
        <InputCreateCollection
          id="description"
          className=''
          classNameLabel='text-sm'
          title='Mô tả'
          placeholder='Thêm mô tả ...'
          type='text'
        />
      </div>
      <div className="py-4 flex justify-between">
        <div className="flex">
          <ButtonImportCollection
            description="Nhập"
            className="self-start text-primary hover:bg-slate-300"
          />
          <ButtonImportCollection
            description="Thêm sơ đồ"
            className="self-start text-primary ml-4 hover:bg-slate-300"
          />
        </div>
        <div className="flex items-center self-end">
          <Image src="/assets/icons/setting.svg"  width={40} height={40} alt="Setting collections" className="w-[40px] h-[40px] cursor-pointer hover:bg-slate-300 rounded-full border-2 border-blue p-1" />
        </div>
      </div>
    </div>
  )
}

export default CollectionHeader