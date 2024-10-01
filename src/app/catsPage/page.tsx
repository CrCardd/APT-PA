
import Cat_card from '@/components/cat_card'

const cats: React.FC = () => {

    return(
        <>
            <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 w-full min-h-screen h-full flex justify-evenly items-center flex-wrap p-[100px]">
                <Cat_card name={"BEBÊ"} age={"2016 | 2024"} color={"amber"}/>
                <Cat_card name={"LUA"} age={"2020 | 2021"} color={"indigo"}/>
                <Cat_card name={"MARIE"} age={"2018 | 2019"} color={"red"}/>
            </div>
        </>
    )
}

export default cats;