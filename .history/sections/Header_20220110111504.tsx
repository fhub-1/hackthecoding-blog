import React from 'react'
import{TerminalIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header>
            <div>
                {/* logo */}
                <p className="flex items-center space-x-1 text-blue-600">
                    <TerminalIcon className="w-8 h-8 flex-shrink-0"/>
                    <span className="font-bold text-lg tracking-tighter whitespace-nowrap">Hack the Coding Blog</span>
                </p>
            </div>
        </header>
    )
}

export default Header
