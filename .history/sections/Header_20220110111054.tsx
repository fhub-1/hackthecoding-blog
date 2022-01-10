import React from 'react'
import{TerminalIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header>
            <div>
                {/* logo */}
                <p>
                    <TerminalIcon />
                    <span>Hack the Coding Blog</span>
                </p>
            </div>
        </header>
    )
}

export default Header
