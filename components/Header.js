import Image from "next/image"
import {HomeIcon} from '@heroicons/react/outline'
import { BadgeCheckIcon } from "@heroicons/react/outline"
import { LightningBoltIcon } from "@heroicons/react/outline"
import { SearchIcon } from "@heroicons/react/outline"
import { UserIcon } from "@heroicons/react/outline"
import { CollectionIcon } from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image src="/hulu-logo.png" 
            className="object-contain"
            width={200} height={100}
            />
        </header>
    )
}

export default Header
